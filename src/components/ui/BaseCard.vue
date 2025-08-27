<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <p>
      <slot name="type">
        <span v-if="cardData?.type" class="text-xs/4 text-neutral-500 mb-1">{{
          cardData.type
        }}</span>
      </slot>
    </p>
    <div class="flex items-center mb-4">
      <slot name="title">
        <div v-if="cardData?.title" class="flex items-center">
          <p class="text-sm text-neutral-700 font-semibold mr-2">{{ cardData.title }}</p>
          <BaseBadge v-if="cardData?.badge">#{{ cardData.badge }}</BaseBadge>
        </div>
      </slot>
    </div>
    <div class="text-xs/4 text-neutral-500">
      <slot name="content">
        <div v-if="cardData?.content" class="flex flex-col lg:flex-row">
          <div class="flex-1 pr-1">
            <InformationItem v-for="(item, index) in cardData.content.left" :key="index">
              <template #icon>
                <component :is="iconComponents[item.icon]" />
              </template>
              <template #text>{{ item.text }}</template>
            </InformationItem>
          </div>
          <div class="flex-1">
            <InformationItem v-for="(item, index) in cardData.content.right" :key="index">
              <template #icon>
                <component :is="iconComponents[item.icon]" />
              </template>
              <template #text>{{ item.text }}</template>
            </InformationItem>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup>
import BaseBadge from './BaseBadge.vue'
import InformationItem from '../InformationItem.vue'
import IconAddressCard from '../icons/IconAddressCard.vue'
import IconLocation from '../icons/IconLocation.vue'
import IconUser from '../icons/IconUser.vue'
import IconEnvelope from '../icons/IconEnvelope.vue'
import IconPhone from '../icons/IconPhone.vue'
import IconFax from '../icons/IconFax.vue'
import IconEye from '../icons/IconEye.vue'

defineProps({
  cardData: {
    type: Object,
    default: () => ({}),
  },
})

const iconComponents = {
  IconAddressCard,
  IconLocation,
  IconUser,
  IconEnvelope,
  IconPhone,
  IconFax,
  IconEye,
}
</script>
