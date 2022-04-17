import Swal from 'sweetalert2'

const checkCorrectWrong = (
  answers: string[],
  correctAnswers: string[],
): void => {
  if (JSON.stringify(answers) === JSON.stringify(correctAnswers)) {
    Swal.fire({
      icon: 'success',
      title: 'You are Correct !',
      showConfirmButton: false,
      timer: 1500,
    })
  } else {
    Swal.fire({
      icon: 'error',
      title: 'You are Wrong !',
      showConfirmButton: false,
      timer: 1500,
    })
  }
}

export default checkCorrectWrong
