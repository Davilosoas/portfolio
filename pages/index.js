function home() {
    return( 
     <html lang="en" class="overflow-x-hidden">
        <head>
          {/* <meta charset="utf-8">
          <meta name="abrirport" content="width=device-width, initial-scale=1">
          <meta name="description" content="">
          <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
          <meta name="generator" content="Hugo 0.88.1"> */}
          <title>Meu portfólio</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
          <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/album/"></link>
      
          
      
          {/* <!-- Bootstrap core CSS --> */}
      <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet"></link>
      
          {/* <style>
            .bd-placeholder-img {
              font-size: 1.125rem;
              text-anchor: middle;
              -webkit-user-select: none;
              -moz-user-select: none;
              user-select: none;
            }
      
            @media (min-width: 768px) {
              .bd-placeholder-img-lg {
                font-size: 3.5rem;
              }
            }
          </style> */}
      
          
        </head>
        <body >
          
      <header>
        <div class="collapse bg-dark" id="navbarHeader">
          <div class="container">
            <div class="row">
              
            </div>
          </div>
        </div>
        <div class="navbar navbar-dark bg-dark shadow-sm">
          <div class="container">
            <a href="#" class="navbar-brand d-flex align-items-center">
              
              <strong class="text-2xl">Portfólio</strong>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>
      
      <main>
      
        <section class="py-5 text-center container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">Bem-vindo ao meu Portfólio</h1>
              <p class="lead text-muted">
                Aqui você encontrará um pouco do meu trabalho. 
              </p>
              
                <input id ="test" placeholder="teste"></input>
                <button  onClick={console.log(document.getElementById('test').value)}>teste</button>
            </div>
          </div>
        </section>
      
        <div class=" py-5 w-screen space-x-6 bg-gray-200 flex flex-row  justify-center items-center">

            <a class="projectImg bg-cover h-48 w-64  border-4 border-black  border-solid rounded-lg hover:brightness-50 hover:cursor-pointer" href="./login"><img class="bg-cover h-full w-full"src="https://previews.dropbox.com/p/thumb/ABjAy04fwTBLWYKuq9kObOsCXgwTyR6ucCv59oUX7ASf5T-437h6sp0BKYR1YOossjKewNtEJh9ylI4K0NtHt0tIm_CwbuwMi1Y7DZMNxQWitEXHGlijyGew5qQJW1-ylL7vELH_JYZqaYRUO-jEx2MLZhZ6QNwiTn56j8H-qcqmPiuZyRlgDmwWFyF9hjFwNhwi2eN24r8P0WXwEUBdzD4jNAS1vafhhEUrvnXswFMX7afHgCUV7CdE_Yf3nGFpOUSj0CzSOo7xlR5VoxicfIZ3_fwdaI3RI0sr1rTnMKL2dKnzTcPqdZaSpNlNvqCyOfRf2BfM1EQV4ksYvJhh0eL21B9G1cc8m0R3Syilnl1XxoU8PPO7SA94YXOaqfpJgp0/p.png"/>
              
            </a>
            <a class=" bg-cover h-48 w-64  border-4 border-black  border-solid rounded-lg hover:brightness-50 hover:cursor-pointer" href="./ladyKaty"><img class="object-fill bg-cover h-full w-full" src="https://previews.dropbox.com/p/thumb/ABjvtn3LmRNT2UPDhTVh0JnZdT3aVH5Zmki1Fv1ZRsQXiHXUP1dsQjQtfbbYQUqY-PEcfqyzDQPUbSOgdJJQDcOtJTYkJMiUk2Lop2BG6PXx0lKiwiTKHhbqhFZ5fE6w2Wwxfa-mkFDWqVRX4XcDvVAO6dv-qC3H_B2JyrIiy0FQRKaVBdphQwqOc_CUbOG3QV7UVF7ckPq8DLG0tHh8K4bLOKX67h2D5WkSjCGxUwdUU6miNE7xWKe2XcBtNieDrPIU8Mz4wx2fE729H7--JoYf9FwZ7B344VOWg0J6LeVUw_rF2C8YArPNitHoQjtXjZEFXClKMCDn1L6-Y7lzyc_xXMFV4J8IxidmzEAqHzdq1zkNzQkJJbeYn0iko3pjWp4/p.png"/>
              
            </a>
            <a class=" bg-cover h-48 w-64  border-4 border-black  border-solid rounded-lg hover:brightness-50 hover:cursor-pointer">
              
            </a>

        </div>
      
      </main>
      
      <footer class="text-muted py-5">
        <div class="container flex w-screen items-center ">
          
          
          <a href = "https://www.linkedin.com/in/davils/" class="grow-0">
            <img class="hover:brightness-75"src ="https://blog-assets.hootsuite.com/wp-content/uploads/2018/09/In-2C-54px-R.png"></img>
          </a>
          <div class="grow"> </div>

         
         {/* <a href = "mailto:davilosoas@gmail.com" class="grow-0" >
            <img class = "" src ="https://ucdfbced92a31ac5c4c93da4095e.preabrirs.dropboxusercontent.com/p/thumb/ABhI6su9JE845F3TUPt-2ZOZwafbPLswbvDcvhryf_nfyg7id2W56Rx76hN1LI8rYci-9JnHSUkYncppQQVjt47O8KBdt6aVxV3-Oor1qKdC7t3qDaqU_1WKN0BUk2bPkbrZ0Nv281MhG9vqI1HmiaGJSccCZas1xDcg_wejAEdstvfQMPldWXalFyh792by2adxKqB9fKexDrcMPUAdhxOKVepxKOt9vV2ZOyqevk9RNKYaXU8MTGm7sUJ0F7WNqjD7muHW2anNwYcd9gkp6zr5UtNwmZ1UIy2-7AFyQlUDT2kiM4WVoATuZCAaIM1sU2cf4d8BQr0ZcBureTduX7SO8rH_lAdOxjK_bb2GVw6hswX_xw-KKeK3dVoLx5P35NYerJ6gjAV5q9508UtVcWSLhw0duRp9QFkhZcSMTYWn-A/p.png"></img>
          </a>
          <div class="grow ">

          </div> */}

          
          <a href="#" class="font-bold text-xl hover:decoration-dotted hover:text-gray-400 "  >
            Início
          </a>
          
           
        </div>
      </footer>
      
      
          <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
      
            
        </body>
    </html>

    )
} 

export default home;