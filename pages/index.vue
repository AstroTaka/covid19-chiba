<template>
  <div class="MainPage">
    <div v-if="loading">
      Loading...
    </div>
    <div v-else>
      <page-header
        :icon="headerItem.icon"
        :title="headerItem.title"
        :date="headerItem.date"
      />
      <whats-new class="mb-4" :items="newsItems" />
      <static-info
        class="mb-4"
        url="https://www.pref.chiba.lg.jp/kenfuku/kansenshou/corona-soudancenter.html#meyasu"
        :text="'自分や家族の症状に不安や心配があればまずは電話相談をどうぞ'"
        :btn-text="'相談の手順を見る'"
      />
      <v-row class="DataBlock">
        <v-col cols="12" md="6" class="DataCard">
          <time-bar-chart
            title="松戸市の陽性者数の確定日別の推移"
            :title-id="'number-of-confirmed-cases'"
            :chart-id="'time-bar-chart-patients'"
            :chart-data="patientsGraph"
            :date="patientsListDate"
            :unit="'人'"
          />
        </v-col>
        <v-col cols="12" md="6" class="DataCard">
          <data-table
            :title="'松戸市の陽性患者の属性'"
            :title-id="'attributes-of-confirmed-cases'"
            :chart-data="patientsTable"
            :chart-option="{}"
            :date="patientsListDate"
            :info="sumInfoOfPatients"
            :url="
              'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000068'
            "
          />
        </v-col>
        <v-col cols="12" md="6" class="DataCard">
          <data-view
            :title="$t('千葉県内の検査陽性者の状況')"
            :title-id="'details-of-confirmed-cases'"
            :date="patientsDate"
          >
            <template v-slot:button>
              <p :class="$style.note">
                （注）県内において疑い例または患者の濃厚接触者として検査を行ったものについて掲載<br />
                （チャーター機帰国者、クルーズ船乗客等は含まれていない。）
              </p>
            </template>
            <confirmed-cases-details-table
              :aria-label="$t('検査陽性者の状況')"
              v-bind="confirmedCases"
            />
          </data-view>
        </v-col>
        <v-col cols="12" md="6" class="DataCard">
          <time-stacked-bar-chart
            title="千葉県内の患者数の推移"
            :title-id="'number-of-patients'"
            :chart-id="'time-stacked-bar-chart-patients'"
            :chart-data="currentPatientsGraph"
            :date="currentPatientsDate"
            :items="currentPatientsTransitionItems"
            :labels="currentPatientsLabels"
            :unit="'人'"
          />
        </v-col>

        <v-col cols="12" md="6" class="DataCard">
          <time-stacked-bar-chart
            title="千葉県内の退院・療養解除と死亡者数の推移"
            :title-id="'number-of-discharge'"
            :chart-id="'time-stacked-bar-chart-discharge'"
            :chart-data="currentDischargeGraph"
            :date="currentPatientsDate"
            :items="currentDischargeTransitionItems"
            :labels="currentPatientsLabels"
            :unit="'人'"
          >
            <template #supplement>
              <p class="Graph-Desc">
                4月14日までの累積の退院者数：44人、死亡者数：6人
              </p>
            </template>
          </time-stacked-bar-chart>
        </v-col>

        <v-col cols="12" md="6" class="DataCard">
          <time-bar-chart
            title="千葉県内の新規陽性反応者数の推移"
            :title-id="'number-of-confirmed-cases-chiba'"
            :chart-id="'time-bar-chart-patients-chiba'"
            :chart-data="patientsChibaGraph"
            :date="patientsChibaDate"
            :unit="'人'"
          />
        </v-col>
        <v-col cols="12" md="6" class="DataCard">
          <time-stacked-bar-chart
            title="千葉県内の検査実施数"
            :title-id="'number-of-tested'"
            :chart-id="'time-stacked-bar-chart-inspections'"
            :chart-data="inspectionsGraph"
            :date="inspectionsDate"
            :items="inspectionsItems"
            :labels="inspectionsLabels"
            :unit="'件'"
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import TimeBarChart from '@/components/TimeBarChart.vue'
import TimeStackedBarChart from '@/components/TimeStackedBarChart.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import StaticInfo from '@/components/StaticInfo.vue'
import Data from '@/data/data.json'
import DataTable from '@/components/DataTable.vue'
import formatGraph from '@/utils/formatGraph'
import formatTable from '@/utils/formatTable'
import formatConfirmedCases from '@/utils/formatConfirmedCases'
import News from '@/data/news.json'
import DataView from '@/components/DataView.vue'
import ConfirmedCasesDetailsTable from '@/components/ConfirmedCasesDetailsTable.vue'

import { convertDateToDataTableText } from '@/utils/formatDate'

export default {
  components: {
    PageHeader,
    TimeBarChart,
    TimeStackedBarChart,
    WhatsNew,
    StaticInfo,
    DataView,
    DataTable,
    ConfirmedCasesDetailsTable
  },
  data() {
    const data = {
      DataPub: {},
      patientsTable: {},
      patientsGraph: {},
      patientsChibaGraph: {},
      inspectionsGraph: {},
      inspectionsDate: {},
      inspectionsItems: [],
      inspectionsLabels: [],
      currentPatientsGraph: {},
      currentDischargeGraph: {},
      currentPatientsLabels: [],
      patientsDate: {},
      patientsChibaDate: {},
      patientsListDate: {},
      patientsLabels: [],
      patientsTransitionItems: [],
      patientsTransitionLabels: [],
      confirmedCases: {},
      loading: true,
      errored: false,
      sumInfoOfPatients: {},
      headerItem: {},
      newsItems: News.newsItems.slice(0, 5),
      metroGraphOption: {
        responsive: true,
        legend: {
          display: true
        },
        scales: {
          xAxes: [
            {
              position: 'bottom',
              stacked: false,
              gridLines: {
                display: true
              },
              ticks: {
                fontSize: 10,
                maxTicksLimit: 20,
                fontColor: '#808080'
              }
            }
          ],
          yAxes: [
            {
              stacked: false,
              gridLines: {
                display: true
              },
              ticks: {
                fontSize: 12,
                maxTicksLimit: 10,
                fontColor: '#808080',
                callback(value) {
                  return value.toFixed(2) + '%'
                }
              }
            }
          ]
        },
        tooltips: {
          displayColors: false,
          callbacks: {
            title(tooltipItems, _) {
              const label = tooltipItems[0].label
              return `期間: ${label}`
            }
          }
        }
      }
    }
    return data
  },
  mounted() {
    this.DataPub = Data
    this.headerItem = {
      icon: 'mdi-chart-timeline-variant',
      title: '松戸市の最新感染動向',
      date: this.DataPub.lastUpdate
    }
    this.patientsGraph = formatGraph(this.DataPub.patients.data)
    this.patientsChibaGraph = formatGraph(this.DataPub.patients_chiba.data)
    this.patientsTable = formatTable(this.DataPub.patients_list.data)
    this.sumInfoOfPatients = {
      lText: this.DataPub.patients.data.reduce((a, c) => a + c.小計, 0),
      sText:
        convertDateToDataTableText(this.DataPub.patients_list.date) + 'の累計',
      // sText: convertDateToDataTableText(this.DataPub.patients_list.data[this.DataPub.patients_list.data.length -1].リリース日) + 'の累計',
      // sText: this.DataPub.patients_list.data[this.DataPub.patients_list.data.length -1].リリース日 + 'の累計',
      unit: '人'
    }

    this.inspectionsDate = this.DataPub.inspections_summary.date
    this.inspectionsGraph = [
      this.DataPub.inspections_summary.data['陽性'],
      this.DataPub.inspections_summary.data['陰性']
    ]
    this.inspectionsItems = ['陽性', '陰性']

    this.currentPatientsGraph = [
      this.DataPub.current_patients_summary.data['未入院'],
      this.DataPub.current_patients_summary.data['入院中'],
      this.DataPub.current_patients_summary.data['重症']
    ]
    this.currentDischargeGraph = [
      this.DataPub.current_patients_summary.data['死亡'],
      this.DataPub.current_patients_summary.data['退院']
    ]
    this.currentPatientsTransitionItems = ['未入院', '入院中', '重症']
    this.currentDischargeTransitionItems = ['死亡', '退院・療養解除']
    this.currentPatientsDate = this.DataPub.current_patients_summary.date
    this.currentPatientsLabels = this.DataPub.current_patients_summary.labels

    this.inspectionsLabels = this.DataPub.inspections_summary.labels
    this.patientsDate = this.DataPub.patients_summary.date
    this.patientsChibaDate = this.DataPub.patients_chiba.date
    this.patientsListDate = this.DataPub.patients_list.date
    this.patientsLabels = this.DataPub.patients_summary.labels
    const data = this.DataPub.main_summary
    const formattedData = {
      検査実施人数: data.inspections_total_count,
      陽性患者: data.patients_count,
      現在の感染者:
        data.hospital_count +
        data.hospital_waiting_count +
        data.hotel_stay_count +
        data.home_stay_count +
        data.other_count,
      入院中: data.hospital_count,
      自宅療養: data.home_stay_count,
      入院調整中: data.hospital_waiting_count,
      ホテル療養: data.hotel_stay_count,
      その他: data.other_count,
      重症: data.severe_injury_count,
      死亡: data.death_count,
      退院_療養終了: data.discharge_count + data.finish_stay_count
    }
    // this.confirmedCases = formatConfirmedCases(this.DataPub.main_summary)
    this.confirmedCases = formattedData
    this.loading = false
  },
  head() {
    return {
      title: '松戸市の最新感染動向'
    }
  }
}
</script>

<style lang="scss" scoped>
.MainPage {
  .DataBlock {
    margin: 20px -8px;
    .DataCard {
      @include largerThan($medium) {
        padding: 10px;
      }
      @include lessThan($small) {
        padding: 4px 8px;
      }
    }
  }
  .Graph-Desc {
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 12px;
    color: $gray-3;
    align-items: flex-start;
  }
}
</style>

<style lang="scss" module>
.note {
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 12px;
  color: $gray-3;
}
</style>
