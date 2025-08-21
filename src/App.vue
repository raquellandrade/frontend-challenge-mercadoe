<script setup>
import ForeHead from './components/ForeHead.vue'
import BaseCard from './components/ui/BaseCard.vue'
import IconAddressCard from './components/icons/IconAddressCard.vue'
import BaseBadge from './components/ui/BaseBadge.vue'
import IconLocation from './components/icons/IconLocation.vue'
import InformationItem from './components/InformationItem.vue'
import IconEye from './components/icons/IconEye.vue'
import IconUser from './components/icons/IconUser.vue'
import IconEnvelope from './components/icons/IconEnvelope.vue'
import IconPhone from './components/icons/IconPhone.vue'
import IconFax from './components/icons/IconFax.vue'
</script>

<template>
  <main>
    <ForeHead />
    <BaseCard>
      <template #type>
        <p class="text-xs/4 text-neutral-500 mb-1">Supplier</p>
      </template>
      <template #title>
        <p class="text-sm text-neutral-700 font-semibold mr-2">Motion Industries INC</p>
        <BaseBadge>#101908</BaseBadge>
      </template>
      <template #content>
        <div class="flex">
          <div class="flex-1">
            <InformationItem>
              <template #icon>
                <IconAddressCard />
              </template>
              <template #text>CNPJ: 00.823.053/0001-02</template>
            </InformationItem>

            <InformationItem>
              <template #icon>
                <IconLocation />
              </template>
              <template #text
                >O Box 1477 - Birmingham AL - 35201-4666 - United States of America</template
              >
            </InformationItem>

            <InformationItem>
              <template #icon>
                <IconUser />
              </template>
              <template #text> Jack Jeff Ripple Applejack</template>
            </InformationItem>
          </div>
          <div class="flex-1">
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

            <InformationItem>
              <template #icon>
                <IconEye />
              </template>
              <template #text> 2020-05-23T12:45:20.39 </template>
            </InformationItem>
          </div>
        </div>
      </template>
    </BaseCard>
  </main>
</template>
