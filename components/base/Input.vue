<template>
    <div class="form-element-row mb-5">
        <label class="form-label fs-7">{{ label }}</label>
        <input :name="name" :type="type" :value="inputValue" :placeholder="placeholder"
            :class="['form-control', { 'error-input': errorMessage }]" @input="handleInputChange" />
        <span class="text-danger" v-if="errorMessage">{{ errorMessage }}</span>

    </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate"
const props = defineProps({
    name: {
        type: String,
        default: ""
    },
    modelValue: {
        default: ""
    },
    label: {
        type: String,
        default: ""
    },
    placeholder: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        default: "text"
    },
    ignoreErrorMsg: {
        type: Boolean,
        default: false
    }
})

const { errorMessage, value: inputValue, handleChange, setValue } = useField(props.name,undefined ,{
    initialValue: props.modelValue
})
const emit = defineEmits(['update:modelValue'])
watch(() => props.modelValue, (val) => { setValue(val) })
const handleInputChange = (e: any) => {
    emit('update:modelValue', e.target.value)
    handleChange(e)
}
</script>

<style scoped></style>