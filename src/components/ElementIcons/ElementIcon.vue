<template>
  <IcApp v-if="elementIcon === 'IcApp'" :color="color" />
  <IcChart v-else-if="elementIcon === 'IcChart'" :color="color" />
  <IcPerson v-else-if="elementIcon === 'IcPerson'" :color="color" />
  <IcOption v-else-if="elementIcon === 'IcOption'" :color="color" />
  <IcHelp v-else-if="elementIcon === 'IcHelp'" :color="color" />
  <IcInfo v-else-if="elementIcon === 'IcInfo'" :color="color" />
  <IcNotification v-else-if="elementIcon === 'IcNotification'" :color="color" />
  <IcPayback v-else-if="elementIcon === 'IcPayback'" :color="color" />
  <IcPlane v-else-if="elementIcon === 'IcPlane'" :color="color" />
  <IcSetting v-else-if="elementIcon === 'IcSetting'" :color="color" />
  <IcUpdate v-else-if="elementIcon === 'IcUpdate'" :color="color" />
  <IcMedia v-else-if="elementIcon === 'IcMedia'" :color="color" />
  <IcMinus v-else-if="elementIcon === 'IcMinus'" :color="color" />
  <IcLink v-else-if="elementIcon === 'IcLink'" :color="color" />
  <IcArrowRight v-else-if="elementIcon === 'IcArrowRight'" :color="color" />
  <IcDown v-else-if="elementIcon === 'IcDown'" :color="color" />
  <IcEdit v-else-if="elementIcon === 'IcEdit'" :color="color" />
  <IcFill v-else-if="elementIcon === 'IcFill'" :color="color" />
  <IcGraphicEmpty v-else-if="elementIcon === 'IcGraphicEmpty'" :color="color" />
  <IcCopy v-else-if="elementIcon === 'IcCopy'" :color="color" />
  <IcDelete v-else-if="elementIcon === 'IcDelete'" :color="color" />
  <IcPlus v-else-if="elementIcon === 'IcPlus'" :color="color" />
  <IcMoreVertical v-else-if="elementIcon === 'IcMoreVertical'" :color="color" />
  <IcCancleFill v-else-if="elementIcon === 'IcCancleFill'" :color="color" />
  <IcChecked v-else-if="elementIcon === 'IcChecked'" :color="color" />
  <IcSparkle v-else-if="elementIcon === 'IcSparkle'" :color="color" />
  <IcStock v-else-if="elementIcon === 'IcStock'" :color="color" />
  <IcPreview v-else-if="elementIcon === 'IcPreview'" :color="color" />
  <IcLoadingPrimary
    v-else-if="elementIcon === 'IcLoadingPrimary'"
    :color="color"
  />
  <IcLayer v-else-if="elementIcon === 'IcLayer'" :color="color" />
  <IcCta v-else-if="elementIcon === 'IcCta'" :color="color" />
  <IcSearch v-else-if="elementIcon === 'IcSearch'" :color="color" />
  <IcClose v-else-if="elementIcon === 'IcClose'" :color="color" />
  <IcCoreUser v-else-if="elementIcon === 'IcCoreUser'" :color="color" />
  <IcCoreCart v-else-if="elementIcon === 'IcCoreCart'" :color="color" />
</template>

<script setup lang="ts">
import {
  IcApp,
  IcNotification,
  IcChart,
  IcHelp,
  IcInfo,
  IcOption,
  IcPayback,
  IcPerson,
  IcPlane,
  IcSetting,
  IcUpdate,
  IcMedia,
  IcMinus,
  IcLink,
  IcArrowRight,
  IcDown,
  IcEdit,
  IcCopy,
  IcDelete,
  IcPlus,
  IcMoreVertical,
  IcCancleFill,
  IcChecked,
  IcSparkle,
  IcPreview,
  IcLoadingPrimary,
  IcLayer,
  IcCta,
  IcSearch,
  IcClose,
  IcCoreUser,
  IcCoreCart,
  IcFill,
  IcGraphicEmpty,
  IcStock,
} from ".";

defineProps<{
  elementIcon: string;
  color?: string;
}>();
</script>
<style scoped lang="scss">
svg {
  cursor: pointer;
}
</style>
