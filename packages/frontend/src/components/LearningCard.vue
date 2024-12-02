<template>
  <div class="card shadow-sm rounded overflow-hidden h-100 d-flex flex-column">
    <CardType :type="content.type" />
    <CardImage :imagePath="content.data.imagePath" :altText="content.data.name" :status="content.context.status" />
    <CardBody :title="content.data.name" :description="content.data.description" />
    <div class="card-footer bg-light border-top mt-auto p-3">
      <template v-if="content.type === 'module'">
        <ModuleFooter :duration="content.data.duration" :moduleType="content.data.moduleType" @start="startModule" />
      </template>

      <template v-if="content.type === 'event'">
        <EventFooter :startDate="content.data.startDate" :endDate="content.data.endDate"
          :signupDeadline="content.data.signupDeadline" :location="content.data.location" @signup="signupEvent" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LearningModel } from "@learning-app/backend/src/types/learningTypes";
import { CardType, CardImage, CardBody, ModuleFooter, EventFooter } from "./CardElements";

const props = defineProps<{ content: LearningModel }>();

function startModule() {
  console.log("Starting module:", props.content.data.name);
}

function signupEvent() {
  console.log("Signing up for event:", props.content.data.name);
}
</script>
