<template>
  <div class="w3-container">
    <h4>트랜지션 클래스</h4>
    <button class="w3-button w3-small w3-blue" @click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    <hr />

    <h4>CSS 트랜지션</h4>
    <button class="w3-button w3-small w3-blue" @click="show2 = !show2">Toggle</button>
    <br>
    <div class="w3-gray w3-padding" style="width:400px">
      <transition name="slide-fade">
        <p v-if="show2">
          <i class="w3-large fa fa-truck"></i>
        </p>
      </transition>
    </div>
    <hr />

    <h4>CSS 애니메이션</h4>
    <button class="w3-button w3-small w3-blue" @click="show3 = !show3">Toggle</button>
    <transition name="bounce">
      <p v-if="show3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
    </transition>
    <hr />

    <h4>컴포넌트 트랜지션</h4>
    <input type="radio" v-model="view" value="view-A" id="view-A">
    <label for="view-A">A</label> &nbsp;
    <input type="radio" v-model="view" value="view-B" id="view-B">
    <label for="view-A">B</label>
    <transition name="component-fade" mode="out-in">
      <component :is="view"></component>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ch4',
  data () {
    return {
      show: true,
      show2: true,
      show3: true,
      view: 'view-A'
    }
  },
  components: {
    'view-A': {template: '<div>Component A</div>'},
    'view-B': {template: '<div>Component B</div>'}
  }
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .slide-fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(300px);
    opacity: .3;
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {transform: scale(0)}
    50% {transform: scale(1.2)}
    100% {transform: scale(1)}
  }

  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to {
    opacity: 0;
  }

</style>
