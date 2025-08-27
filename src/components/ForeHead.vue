<template>
  <div class="flex items-start justify-between mb-8 flex-col lg:flex-row">
    <div class="lg:w-[200px] w-full bg-primary text-white p-4 rounded-r-lg lg:mr-6 mb-2 lg:mb-0">
      <p class="text-lg/6">Pre-Order</p>
      <p class="text-2xl/8 font-bold">{{ dataHeader?.number }}</p>
      <p class="text-xs/4">#ME{{ dataHeader?.serial }}</p>
    </div>
    <div class="lg:grow w-full lg:w-auto mb-4 lg: mb-0">
      <p class="text-xl/7 font-semibold text-neutral-700 mb-3">{{ dataHeader?.buyer }}</p>
      <InformationItem>
        <template #icon>
          <IconUser />
        </template>
        <template #text> {{ dataHeader?.contact?.name }} </template>
      </InformationItem>

      <div
        class="flex lg:items-center gap-1 lg:gap-4 text-xs/4 text-neutral-500 flex-col lg:flex-row"
      >
        <InformationItem>
          <template #icon>
            <IconEnvelope />
          </template>
          <template #text>{{ dataHeader?.contact?.email }}</template>
        </InformationItem>

        <InformationItem>
          <template #icon>
            <IconPhone />
          </template>
          <template #text>{{ dataHeader?.contact?.phone }}</template>
        </InformationItem>

        <InformationItem>
          <template #icon>
            <IconFax />
          </template>
          <template #text> {{ dataHeader?.contact?.fax }} </template>
        </InformationItem>
      </div>
    </div>
    <div class="lg:text-right w-full lg:w-auto">
      <p class="text-xl/7 font-semibold text-neutral-700 mb-1">
        {{ dataHeader?.currency }} {{ dataHeader?.price }}
      </p>
      <p class="text-xl/7 font-semibold text-success-500 mb-1">{{ dataHeader?.status }}</p>
      <p class="text-xs/4 text-neutral-500">{{ formattedCreatedAt }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import IconEnvelope from './icons/IconEnvelope.vue'
import IconPhone from './icons/IconPhone.vue'
import IconFax from './icons/IconFax.vue'
import InformationItem from './InformationItem.vue'
import IconUser from './icons/IconUser.vue'

const props = defineProps({
  dataHeader: {
    type: {},
  },
})

const formattedCreatedAt = computed(() => {
  if (!props.dataHeader?.createdAt) return ''

  const date = new Date(props.dataHeader?.createdAt)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')

  return `Created at ${year}-${month}-${day} at ${hours}:${minutes}:${seconds}`
})
</script>
