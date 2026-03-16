import { apiRegister, mainApi } from "@/api/mainApi"
import { registerSchema } from "@/validations/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useForm } from "react-hook-form"
import { Slide, toast, ToastContainer, Zoom } from "react-toastify"


function RegisterForm() {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(registerSchema),
    mode: 'onSubmit',
    defaultValues: { //ใส่ไว้เพื่อ reset state
      firstName: '',
      lastName: '',
      identity: '',
      password: '',
      confirmPassword: ''
    }
  })
  const { errors, isSubmitting } = formState

  const onSubmit = async (data) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      // const resp = await axios.post('http://localhost:3000/api/auth/register', data)
      // const resp = await apiRegister(data)
      const resp = await mainApi.post('/auth/register', data)
      toast.success(resp.data.message, { transition: Zoom })
      document.getElementById('register-form').close()
      reset()
    } catch (err) {
      console.dir(err)
      const errMsg = err.response?.data.message || err.message
      // alert (JSON.stringify(err,null,2))
      toast.error(errMsg, { transition: Slide, autoClose: 2000, containerId: 'register-modal', position: 'top-center' })
    }
  }

  return (
    <>
      <ToastContainer containerId={'register-modal'} />
      <div className="text-3xl text-center opacity-60">Create a new account
        {isSubmitting && <span className="loading loading-spinner text-info mx-2"></span>}
      </div>
      <div className='divider opacity-60'></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className='flex flex-col gap-5 p-4 pt-3' disabled={isSubmitting}>
          <div className='flex gap-2'>
            <div className="w-full">
              <input type="text" className="input w-full" placeholder='First name' {...register('firstName')} />
              <p className="text-xs text-error">{errors.firstName?.message}</p>
            </div>

            <div className="w-full">
              <input type="text" className="input w-full" placeholder='Last name' {...register('lastName')} />
              <p className="text-xs text-error">{errors.lastName?.message}</p>
            </div>
          </div>

          <div className="w-full">
            <input type="text" className="input w-full" placeholder='E-mail or Phone number' {...register('identity')} />
            <p className="text-xs text-error">{errors.identity?.message}</p>
          </div>

          <div className="w-full">
            <input type="password" className="input w-full" placeholder='New password' {...register('password')} />
            <p className="text-xs text-error">{errors.password?.message}</p>
          </div>

          <div className="w-full">
            <input type="password" className="input w-full" placeholder='Confirm password' {...register('confirmPassword')} />
            <p className="text-xs text-error">{errors.confirmPassword?.message}</p>
          </div>

          <button className="btn btn-secondary" disabled={isSubmitting}>Sign up</button>
          <button type='button' className="btn btn-warning" onClick={() => reset()}>Clear</button>
        </fieldset>
      </form>
      {/* <div className="border">
        <pre className="text-error text-xs">
          {JSON.stringify(errors, (k, v) => k === 'ref' ? undefined : v, 2)}</pre>
      </div> */}
    </>
  )
}

export default RegisterForm