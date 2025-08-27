<script setup>
import { ref, onMounted, computed } from 'vue'
import ForeHead from './components/ForeHead.vue'
import BaseCard from './components/ui/BaseCard.vue'
import IconChevron from './components/icons/IconChevron.vue'
import {
  responseApiHeader,
  responseApiSupplier,
  responseApiAddresses,
  dataHeader,
  dataSupplier,
  dataAddresses,
} from './data/apiClient'

const showAddresses = ref(true)

const supplierCardData = computed(() => {
  const leftItems = []
  const rightItems = []

  if (dataSupplier.value?.document?.type && dataSupplier.value?.document?.value) {
    leftItems.push({
      icon: 'IconAddressCard',
      text: `${dataSupplier.value.document.type}: ${dataSupplier.value.document.value}`,
    })
  }

  if (dataSupplier.value?.address) {
    leftItems.push({
      icon: 'IconLocation',
      text: dataSupplier.value.address,
    })
  }

  if (dataSupplier.value?.contact?.name) {
    leftItems.push({
      icon: 'IconUser',
      text: dataSupplier.value.contact.name,
    })
  }

  if (dataSupplier.value?.contact?.email) {
    rightItems.push({
      icon: 'IconEnvelope',
      text: dataSupplier.value.contact.email,
    })
  }

  if (dataSupplier.value?.contact?.phone) {
    rightItems.push({
      icon: 'IconPhone',
      text: dataSupplier.value.contact.phone,
    })
  }

  if (dataSupplier.value?.contact?.fax) {
    rightItems.push({
      icon: 'IconFax',
      text: dataSupplier.value.contact.fax,
    })
  }

  if (dataSupplier.value?.readAt) {
    rightItems.push({
      icon: 'IconEye',
      text: dataSupplier.value.readAt,
    })
  }

  return {
    type: 'Supplier',
    title: dataSupplier.value?.name,
    badge: `${dataSupplier.value?.code}`,
    content: {
      left: leftItems,
      right: rightItems,
    },
  }
})

const addressCardData = computed(() => {
  return dataAddresses.value.map((item) => {
    const leftItems = []
    const rightItems = []

    if (item?.document?.type && item?.document?.value) {
      leftItems.push({
        icon: 'IconAddressCard',
        text: `${item.document.type}: ${item.document.value}`,
      })
    }

    if (item?.address) {
      leftItems.push({
        icon: 'IconLocation',
        text: item.address,
      })
    }

    if (item?.contact?.name) {
      leftItems.push({
        icon: 'IconUser',
        text: item.contact.name,
      })
    }

    if (item?.contact?.email) {
      rightItems.push({
        icon: 'IconEnvelope',
        text: item.contact.email,
      })
    }

    if (item?.contact?.phone) {
      rightItems.push({
        icon: 'IconPhone',
        text: item.contact.phone,
      })
    }

    if (item?.contact?.fax) {
      rightItems.push({
        icon: 'IconFax',
        text: item.contact.fax,
      })
    }

    if (item?.readAt) {
      rightItems.push({
        icon: 'IconEye',
        text: item.readAt,
      })
    }

    return {
      type: item?.label,
      title: item?.name,
      badge: item?.code,
      content: {
        left: leftItems,
        right: rightItems,
      },
    }
  })
})

onMounted(async () => {
  await { responseApiHeader, responseApiSupplier, responseApiAddresses }
})
</script>

<template>
  <main>
    <ForeHead :dataHeader="dataHeader" />
    <BaseCard :cardData="supplierCardData" />
    <div class="mt-8" v-if="responseApiAddresses">
      <div class="flex items-center mb-4">
        <span
          @click="showAddresses = !showAddresses"
          class="mr-2 transition-transform duration-300 cursor-pointer"
          :class="{ 'rotate-0': showAddresses, 'rotate-180': !showAddresses }"
        >
          <IconChevron />
        </span>
        <h2
          @click="showAddresses = !showAddresses"
          class="font-semibold text-base/5 cursor-pointer"
        >
          Addresses
        </h2>
      </div>
      <div
        v-show="showAddresses"
        class="flex items-center justify-between gap-4 transition-all duration-300 flex-col lg:flex-row"
      >
        <BaseCard
          class="flex-1 w-full"
          :card-data="addressCardData[index]"
          v-for="(address, index) in dataAddresses"
          :key="address.label || index"
        />
      </div>
    </div>
  </main>
</template>
