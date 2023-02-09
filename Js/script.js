const inputText = document.querySelector('.input_text')
const buttonEncrypt = document.querySelector('.btn_encrypt')
const buttonDecrypt = document.querySelector('.btn_decrypt')
const outputText = document.querySelector('.output_text')
const copyButton = document.querySelector('.btn_copy')


buttonEncrypt.addEventListener('click', () => {
  const textDecrypt = encryptText(inputText.value)
  outputText.value = textDecrypt
  outputText.style.backgroundImage = 'none'
  inputText.value = ''
})

buttonDecrypt.addEventListener('click', () => {
  const textDecrypt = decryptText(inputText.value)
  outputText.value = textDecrypt
  outputText.style.backgroundImage = 'none'
  inputText.value = ''
})

copyButton.addEventListener('click', () => {
    outputText.select()
    navigator.clipboard.writeText(outputText.value)
    outputText.value = ''
})


const encryptText = stringEncrypt => {
  let matrixCode = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ]
  stringEncrypt = stringEncrypt.toLowerCase()

  for (let i = 0; i < matrixCode.length; i++) {
    if (stringEncrypt.includes(matrixCode[i][0])) {
      stringEncrypt = stringEncrypt.replaceAll(matrixCode[i][0], matrixCode[i][1])
    }
  }

  return stringEncrypt
}

const decryptText = stringDecrypt => {
  let matrixCode = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ]

  for (let i = 0; i < matrixCode.length; i++) {
    if (stringDecrypt.includes(matrixCode[i][1])) {
      stringDecrypt = stringDecrypt.replaceAll(matrixCode[i][1], matrixCode[i][0])
    }
  }

  return stringDecrypt
}