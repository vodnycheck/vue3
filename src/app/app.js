import { reactive, computed } from 'vue'

export default {
    setup() {
        const { increment, incrementState } = useCounterIncrement();
        const { changeColor, colorState } = useColorChange();

        function clickHandle() {
            changeColor();
            increment();
        }

        return {
            incrementState,
            colorState,
            clickHandle
        }
    },
    template: `
        <button @click="clickHandle" :style="{ backgroundColor: colorState.color, transition: 'background-color, .5s' }">
            Count is: {{ incrementState.count }}
        </button>
    `
}

function useCounterIncrement() {
    const incrementState = reactive({
        count: 0
    });

    function increment() {
        incrementState.count++
    }

    return {
        incrementState,
        increment
    }
}

function useColorChange() {
    let colorState = reactive({
        color: '#ffffff'
    });

    function changeColor() {
        colorState.color = getRandomColor();
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    return {
        changeColor,
        colorState
    }
}