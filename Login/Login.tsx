import { LoginForm } from '@/components/AuthUser/LoginForm'

// Page Component for login
export const Login = () => {
  return (
    <section
      data-aos="fade-zoom-in"
      data-aos-delay="300"
      className="w-full flex justify-end items-end font-Montserrat"
    >
      <div className="w-1/2 items-center flex justify-center sm:hidden md:hidden lg:hidden bg-gray">
        <img
          src="https://r2.awaqinternship.org/Login/Illustration-login.png"
          alt=""
          className="mt-[20px] xl:w-[450px] 2xl:w-[500px] max-w-[500px] mb-20"
        />
      </div>
      <div
        className="w-1/2 flex mt-[20px] items-center justify-center
          flex-col md:w-full sm:w-full lg:w-full mb-10"
      >
        <LoginForm hasLogo={false} />
        <div className="w-full">
          <img
            src="https://r2.awaqinternship.org/Login/Illustration-login.png"
            alt=""
            className="my-10 hidden sm:flex w-9/12 mx-auto"
          />
        </div>
      </div>
    </section>
  )
}
