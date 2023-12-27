<template>
    <div>
      <div class="mx-3 mt-3 mb-5">
        <div class="row">
          <div class="col-xl-12 col-bg-12 col-md-12 col-sm-12">
            <p
              class="title1"
              data-aos="fade"
              data-aos-once="true"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-duration="1000"
            >
              {{ data.title }}
            </p>
            <ul
              class="timeline"
              v-for="(e, idx) in props.data"
              :key="e.name"
              :style="{ 'transition-delay': idx / 4.2 + 's' }"
              data-aos="fade-up"
              data-offset="10"
              data-aos-once="true"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-duration="500"
            >
              <li class="m-0 pb-2">
                <div>
                  <div class="px-8 title2 ">{{ e.name }}, {{ e.place }}</div>
                  <div class="px-2 title3 px-8 text-secondary">
                    {{  e.position }}
                    {{ e.gpa ? "(" + e.gpa + ")" : "" }}
                  </div>
                  <div class="px-2 date px-8 text-secondary">{{ e.date }}</div>
                  <div class="px-8 pb-2 pt-2 mb-5 text-secondary" style="text-align: justify;">
                    {{ e.description }}
                  </div>
                  <div class="flex flex-wrap">
                    <BadgeSkill
                    class="mx-2  p-2 mb-2 ml-8"
                    v-for="s in e.skills"
                    :key="s"
                    :text="s"
                    >{{ s }}</BadgeSkill>
                  </div>
                  
                  <p class="m-2"></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
      import { defineProps } from "vue";
      import BadgeSkill from "@/components/BadgeSkill.vue";

      const props = defineProps({
        data: { type: Object, required: true}
      })

  </script>
  
  <style scoped>
  .title1 {
    font-size: 24px;
    font-weight: 500;
  }
  
  .title2 {
    font-size: 20px;
    font-weight: 400;
  }
  
  .title3 {
    font-size: 16px;
    font-weight: 400;
  }
  
  .badge {
    background-color: rgb(211, 227, 233);
    transition: all 0.5s;
    font-weight: 500;
  }
  
  .date {
    font-size: 14px;
    font-weight: 300;
  }
  
  ul.timeline {
    list-style-type: none;
    position: relative;
  }
  ul.timeline:before {
    content: " ";
    background: #fff;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 93%;
    margin-top: 20px;
    z-index: 400;
  }
  ul.timeline > li {
    margin: 20px 0;
    padding-left: 20px;
  }
  ul.timeline > li:before {
    content: " ";
    background: #495a80;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #495a80;
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 400;
  }
  
  .bg-dark2 {
    background-color: #3c4148 !important;
  }
  </style>