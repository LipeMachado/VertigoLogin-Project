import vertigo from '../../Assets/Logo.svg'
import { Forms } from '../../Components/Forms'

export function LoginPage() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
                <div>
                    <div className="w-full flex flex-col h-full justify-start lg:justify-center px-0 lg:px-28 items-center lg:items-start">
                        <img className="w-[160px] h-[54px] hidden lg:flex" src={vertigo} alt="Vertigo Logo" />
                        <div className="bg-BackgroundLoginPageMobile bg-center bg-cover bg-no-repeat w-full h-40 flex justify-center items-center lg:hidden">
                            <img className="w-[200px] h-[67px]" src={vertigo} alt="Vertigo Logo" />
                        </div>
                        <main className="flex flex-col mt-1 lg:mt-20 p-5 lg:p-0 gap-10 w-full max-w-[384px]">
                            <header className="flex flex-col gap-4 w-full max-w-[350px]">
                                <h1 className="font-sans text-3xl lg:text-4xl font-bold text-gray-800">
                                    Acesse a plataforma
                                </h1>
                                <p className="font-sans font-normal text-base text-gray-600">
                                    Faça login ou registre-se para começar a construir seus projetos ainda hoje.
                                </p>
                            </header>
                            <Forms />
                        </main>
                    </div>
                </div>
                <div className="bg-BackgroundLoginPage bg-cover bg-no-repeat hidden lg:flex" />
            </div>
        </>
    )
}
