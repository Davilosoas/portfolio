function login() {
    return(
        <html>
            <body class="lgnBody"> 
                <main class="lgnMain">
                    <form action="" method="post">
                            <h1 class="lgnH1 text-5xl font-bold mt-10">
                                Bem-vindo
                            </h1>

                            <section>
                                <label for="name" class="lbl">
                                    Nome de usuário*
                                </label>
                                <input type="text" placeholder="Digite seu nome de usuário aqui!" class="ipt"></input>
                            </section>

                            <section>
                                <label for="psw" class="lbl">
                                    Senha*
                                </label>
                                <input type="text" placeholder="Digite sua senha aqui!" class="ipt"></input>
                            </section>
                            <section class="flex items-center  mt-0">
                                <input type="checkbox" class="">
                                
                                </input>

                                <span class=" text-gray-400">
                                    Lembrar de mim
                                </span>
                            </section>
                            

                            <div class="center">
                                <button  class="lgnBtn" action="/login">
                                    ENTRAR
                                </button>
                            </div>
                            
                            <section class="links">
                                <a href="/login" class="linkRgst ">
                                    Não tem uma conta?
                                </a>
                                <a href="/login" class="linkPsw">
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
