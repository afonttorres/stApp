<template>
  <div class="q-pa-md" style="height: calc(100% - 50px);position: fixed; width: 100%">
    <h1 class="text-h6 q-mb-md" style="height: 5%;">Quiz App</h1>
    <div class="row q-ma-md" style="width: 70%; height: 10%">
      <q-select v-model="selected" :options="['Fisio', 'Farmaco']" :label="'Escull el test'" :input-style="{width:'100%'}"/>
    </div>
    <section v-if="quizStarted && !watchAll" class="quiz-cont col">
      <div v-if="!quizFinished" class="col" style="width: 100%; justify-content: flex-start;">
        <p class="q-mb-md" style="width: 100%;">#{{ currentQuestion.index }} <strong>{{ currentQuestion.answer }}</strong>
        </p>
        <div class="row">
          <q-radio v-model="selectedAnswer" :label="'V'" :val="true" />
          <q-radio v-model="selectedAnswer" :label="'F'" :val="false" />
        </div>
        <p v-if="response" class="text-body response">
          {{ response }}
        </p>
        <div class="row quiz-btn">
          <q-btn v-if="currentIndex > 0" @click="back" label="Enrere" color="secondary" />
          <q-btn @click="checkAnswer" label="Següent" color="primary" />
        </div>
      </div>

      <div v-else class="col">
        <p class="q-mb-md">Quiz acabat</p>
        <p>Respostes correctes: {{ correctAnswers }}</p>
        <p>Puntuació: {{ score }}%</p>
        <q-btn @click="resetQuiz" label="Reiniciar" color="primary" class="end-btn" />
      </div>

    </section>


    <section v-if="watchAll" class="watch-all-cont">
      <q-list>
        <q-item v-for="({ answer, correction }, i) of quiz" style="width:100%;">
          <p style="width: inherit;"><span>#{{ i + 1 }}&nbsp;</span><strong> {{ answer }}</strong> - <span>{{
            getCorrectionValue(correction) }}</span></p>
        </q-item>
      </q-list>
    </section>

    <div class="row buttons-cont">
      <q-btn v-if="!quizStarted" @click="startQuiz" label="Començar" color="primary" />
      <q-btn @click="() => watchAll = !watchAll" label="Veure-ho tot" color="accent" />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue';
import { fisio } from 'src/data/fisio';
import { farmaco } from 'src/data/farmaco';
import { DataMapper } from 'src/data/dataMapper';

const selected = ref("Fisio");
const quiz = computed(()=> new DataMapper().mapDataToQuiz(selected.value == 'Fisio' ? fisio : farmaco));

const quizStarted = ref(false);
const quizFinished = ref(false);
const watchAll = ref(false);
let currentQuestion = reactive({});

let selectedAnswer = ref("");
let response = ref('');
let currentIndex = ref(0);
let correctAnswers = 0;

const startQuiz = () => {
  quizStarted.value = true;
  quizFinished.value = false;
  currentIndex.value = 0;
  correctAnswers = 0;
  selectedAnswer.value = "";
  watchAll.value = false;
  loadQuestion();
}

const loadQuestion = () => {
  currentIndex.value < quiz.value.length ? currentQuestion = { ...quiz.value[currentIndex.value], index: (currentIndex.value + 1) } : quizFinished.value = true;
}

const back = () => {
  currentIndex.value = currentIndex.value == 0 ? 0 : currentIndex.value -= 1;
  loadQuestion();
}

const checkAnswer = () => {
  if (selectedAnswer.value === currentQuestion.correction) {
    correctAnswers++;
    response.value = 'Correcte'
  } else {
    response.value = 'Incorrecte'
  }
  setTimeout(resetAnswer, 1500);
}

const resetAnswer = () => {
  currentIndex.value = currentIndex.value += 1;
  selectedAnswer.value = '';
  response.value = '';
  loadQuestion();
}

const resetQuiz = () => {
  quizStarted.value = false;
}

const score = computed(() => quiz.value.length == 0 ? 0 : (correctAnswers / quiz.value.length) * 100);

const getCorrectionValue = correction => correction == true ? 'Vertader' : 'False';

</script>
<style scoped lang="scss">
.watch-all-cont,
.quiz-cont {
  height: 70%;
  margin: auto;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
}

.row,
.col {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.col {
  flex-direction: column;
}

.buttons-cont {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  gap: 5%;
  height: 11%;
}

.end-btn {
  bottom: 5%;
  position: absolute;
}

.quiz-btn {
  bottom: 5%;
  position: absolute;
  width: 100%;
  gap: 10%;
}

.response {
  position: absolute;
  bottom: 15%;
  font-size: 1.5rem;
}
</style>

src/data/farmaco
