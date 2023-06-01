import { useForm } from 'react-hook-form';

type Profile = {
    Name: string
    Email: string
    Password: string
}

export function Forms() {

    const { register, handleSubmit } = useForm<Profile>()

    const onSubmit = handleSubmit((data) => {
        alert(`Bem vindo - ${data.Name}`)
    })

    return (
        <>
            <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                <div className="flex flex-col gap-2">
                    <label className="font-sans font-semibold text-sm text-gray-800" htmlFor="name"> Nome </label>
                    <input
                        className="px-4 py-3 bg-white text-sm text-gray-800 leading-5 border border-gray-200 rounded placeholder:text-gray-200 outline-none focus:border-purple-500"
                        id='name'
                        type='text'
                        placeholder="Digite seu nome"
                        required
                        {...register("Name", { required: true, maxLength: 100 })}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-sans font-semibold text-sm text-gray-800" htmlFor="email"> E-mail </label>
                    <input
                        className="px-4 py-3 bg-white text-sm text-gray-800 leading-5 border border-gray-200 rounded placeholder:text-gray-200 outline-none focus:border-purple-500"
                        id='email'
                        type='email'
                        placeholder="Digite seu e-mail"
                        required
                        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                    />
                </div>
                <div className="flex flex-col gap-2 relative">
                    <label className="flex justify-between font-sans font-semibold text-sm text-gray-800" htmlFor="password" >
                        Senha
                        <a href="/" className="text-purple-500 hover:text-purple-400 hover:underline"> Esqueceu a senha? </a>
                    </label>
                    <input
                        className="px-4 py-3 bg-white text-sm text-gray-800 leading-5 border border-gray-200 rounded placeholder:text-gray-200 outline-none focus:border-purple-500"
                        placeholder="Digiete sua senha"
                        id='password'
                        type='password'
                        required
                        {...register("Password", {})}
                    />
                </div>

                <footer className="flex flex-col gap-8">
                    <button
                        className="bg-purple-500 text-white font-bold py-4 rounded outline-none hover:bg-purple-400 hover:ring-1 hover:ring-purple-500 focus:ring-2 focus:ring-purple-400"
                        type='submit'
                    >Entrar</button>
                    <span className="text-gray-600">
                        Ainda não tem uma conta?
                        <a href="/" className="text-purple-500 hover:text-purple-400 hover:underline"> Inscreva-se </a>
                    </span>
                </footer>
            </form>
        </>
    )
}