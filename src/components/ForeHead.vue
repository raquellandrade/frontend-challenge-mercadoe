<template>
  <div class="flex items-start justify-between mb-8">
    <div class="w-[200px] bg-primary text-white p-4 rounded-r-lg mr-6">
      <p class="text-lg/6">Pre-Order</p>
      <p class="text-2xl/8 font-bold">4510001114</p>
      <p class="text-xs/4">#ME11223344</p>
    </div>
    <div class="grow">
      <p class="text-xl/7 font-semibold text-neutral-700 mb-3">MTP West Buyer</p>
      <InformationItem>
        <template #icon>
          <IconUser />
        </template>
        <template #text> Jacksonville Group (Jason Burn) </template>
      </InformationItem>

      <div class="flex items-center gap-4 text-xs/4 text-neutral-500">
        <InformationItem>
          <template #icon>
            <IconEnvelope />
          </template>
          <template #text>jacksonvillegroup@me.com</template>
        </InformationItem>

        <InformationItem>
          <template #icon>
            <IconPhone />
          </template>
          <template #text>903-575-3050</template>
        </InformationItem>

        <InformationItem>
          <template #icon>
            <IconFax />
          </template>
          <template #text> 999-575-3050 </template>
        </InformationItem>
      </div>
    </div>
    <div class="text-right">
      <p class="text-xl/7 font-semibold text-neutral-700 mb-1">USD 20000</p>
      <p class="text-xl/7 font-semibold text-success-500 mb-1">Need to confirm</p>
      <p class="text-xs/4 text-neutral-500">Created at 2020-04-16 at 15:32:55</p>
    </div>
  </div>
</template>

<script setup>
import IconEnvelope from './icons/IconEnvelope.vue'
import IconPhone from './icons/IconPhone.vue'
import IconFax from './icons/IconFax.vue'
import InformationItem from './InformationItem.vue'
import IconUser from './icons/IconUser.vue'
</script>
