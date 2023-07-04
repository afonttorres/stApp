<template>
  <div class="q-pa-md" style="max-height: calc(100vh - 50px);height: 100%;">
    <h1 class="text-h6 q-mb-md">Quiz App</h1>
    <section v-if="quizStarted && !watchAll" class="quiz-cont col">
      <div v-if="!quizFinished" class="col" style="width: 100%;">
        <p class="q-mb-md" style="width: 100%;">{{ currentQuestion.answer }}</p>
        <div class="row">
          <q-radio v-model="selectedAnswer" :label="'V'" :val="true" />
          <q-radio v-model="selectedAnswer" :label="'F'" :val="false" />
        </div>
        <p v-if="response" class="text-body">
          {{ response }}
        </p>
        <q-btn @click="checkAnswer" label="Següent" color="primary" class="check-btn" />
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
        <q-item v-for="({ answer, correction }) of quiz" style="width:100%;">
          <p style="width: inherit;"><strong>{{ answer }}</strong> - <span>{{ getCorrectionValue(correction) }}</span></p>
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
import quiz from 'src/data/quiz.json';

const quizStarted = ref(false);
const quizFinished = ref(false);
const watchAll = ref(false);
let currentQuestion = reactive({});

let selectedAnswer = ref("");
let response = ref('');
let currentIndex = 0;
let correctAnswers = 0;

const startQuiz = () => {
  quizStarted.value = true;
  quizFinished.value = false;
  currentIndex = 0;
  correctAnswers = 0;
  selectedAnswer.value = "";
  watchAll.value = false;
  loadQuestion();
}

const loadQuestion = () => {
  currentIndex < quiz.length ? currentQuestion = { ...quiz[currentIndex] } : quizFinished.value = true;
  // if (currentIndex < quiz.length) {
  //   currentQuestion.enunciado = quiz[currentIndex].enunciado;
  //   currentQuestion.respuesta = quiz[currentIndex].respuesta;
  // } else {
  //   quizFinished.value = true;
  // }
}

const checkAnswer = () => {
  if (selectedAnswer.value === currentQuestion.correction) {
    correctAnswers++;
    response.value = 'Correcte'
  } else {
    response.value = 'Incorrecte'
  }
  currentIndex++;
  selectedAnswer.value = '';
  response.value = '';
  loadQuestion();
}

const resetQuiz = () => {
  quizStarted.value = false;
}

const score = computed(() => quiz.length == 0 ? 0 : (correctAnswers / quiz.length) * 100);

const getCorrectionValue = correction => correction == true ? 'Vertader' : 'False';

</script>
<style scoped lang="scss">
.watch-all-cont,
.quiz-cont {
  height: 75vh;
  margin: auto;
  overflow-y: scroll;
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
  bottom: 5%;
  left: 0;
  gap: 5%;
}
.check-btn, .end-btn {
  bottom: 5%;
  position: absolute;
}
</style>

