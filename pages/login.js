function login() {
    return(
        <html class="overflow-hidden bg-cyan-500">
            <body class="lgnBody overflow-hidden "> 
                <main class="lgnMain bg-cyan-500  divide-transparent">
                    <form action="" method="post">
                            <h1 class="lgnH1 cursor-default text-5xl font-bold mt-10 text-white">
                                Bem-vindo
                            </h1>

                            <section>
                                <label for="name" class="lbl text-white">
                                    Nome de usuário*
                                </label>
                                <input type="text" placeholder="Digite seu nome de usuário aqui!" class="ipt"></input>
                            </section>

                            <section>
                                <label for="psw" class="lbl text-white border-gray-100">
                                    Senha*
                                </label>
                                <input type="text" placeholder="Digite sua senha aqui!" class="ipt text-black"></input>
                            </section>
                            <section class="flex items-center  mt-0">
                                <input type="checkbox" class="">
                                
                                </input>

                                <span class=" text-gray-400 border-gray-100">
                                    Lembrar de mim
                                </span>
                            </section>
                            

                            <div class="center">
                                <a  disabled class="lgnBtn bg-cyan-500 rounded text-white shadow-inner cursor-pointer hover:bg-cyan-400">
                                    ENTRAR
                                </a>
                            </div>
                            
                            <section class="links">
                                <a href="/" class="linkRgst font-bold text-white">
                                    Não tem uma conta?
                                </a>
                                <a href="/" class="linkPsw font-bold text-white">
                                    esqueceu sua senha?
                                </a>
                            </section>
                        
                    </form>
                </main>
            </body>
         </html>
    )     
} 
    
export default login;
