<template>
  <div id="ch3">
    <div class="w3-container">
      <h4>이벤트 리스너</h4>
      <button @click="counter += 1" class="w3-button w3-red">Add 1</button>
      <p class="w3-margin-top">위 버튼을 클릭한 횟수는 {{ counter }} 번입니다.</p>
      <hr />

      <h4>메소드 이벤트 핸들러</h4>
      <button @click="greet" class="w3-button w3-blue">Greet</button>
      <hr />

      <h4>인라인 메소드 핸들러</h4>
      <button @click="say('hi')" class="w3-button w3-green">Say hi</button>
      <button @click="say('WHAT!!')" class="w3-button w3-green">Say what</button>
      <hr />

      <h4>키 수식어</h4>
      <p class="w3-container w3-border-left w3-border-blue w3-margin-bottom">
        {{ keyMessage }}
      </p>
      <input v-model="inputMessage" placeholder="Enter키를 눌러보세요" class="w3-input" @keypress.enter="pressEnter">
      <br>
      <button @click.ctrl="doSomething" class="w3-button w3-blue">ctrl키를 누르고 클릭해보세요</button>
      <button @click.ctrl.exact="doSomething" class="w3-button w3-blue">ctrl키만 누르고 클릭해보세요</button>
      <hr />

      <h4>폼입력 바인딩</h4>
      <div class="w3-container w3-border">
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
      </div>
      <br>
      <div class="w3-container w3-border">
        <input type="checkbox" id="apple" value="apple" v-model="checkedNames">
        <label for="apple">사과</label>
        <input type="checkbox" id="banana" value="banana" v-model="checkedNames">
        <label for="banana">바나나</label>
        <input type="checkbox" id="cherry" value="cherry" v-model="checkedNames">
        <label for="cherry">체리</label>
        <br>
        <span>좋아하는 과일: {{ checkedNames }}</span>
      </div>
      <br>
      <div class="w3-container w3-border">
        <select v-model="selected">
          <option v-for="option in options" :value="option.value" :key="option.key">
            {{ option.text }}
          </option>
        </select>
        <span>선택된 항목: {{ selected }}</span>
      </div>
      <hr />

      <h4>수식어</h4>
      <input class="w3-input" v-model.trim="autoTrim"><br>
      <p class="w3-container w3-border">{{autoTrim}}</p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ChapterThree',
  data () {
    return {
      counter: 0,
      mName: 'vue.js',
      keyMessage: '',
      inputMessage: '',
      checked: false,
      checkedNames: [],
      selected: 'A',
      options: [
        {text: 'One', value: 'A'},
        {text: 'Two', value: 'B'},
        {text: 'Three', value: 'C'}
      ],
      autoTrim: '          앞 뒤의 공백을 무시합니다    '
    }
  },
  methods: {
    greet: function (event) {
      alert('Hello, ' + this.mName)
      if (event) {
        alert(event.target.tagName)
      }
    },
    say: function (msg) {
      alert(msg)
    },
    pressEnter: function () {
      this.keyMessage = this.inputMessage
    },
    doSomething: function () {
      alert('잘했습니다!')
    }

  }
}
</script>
