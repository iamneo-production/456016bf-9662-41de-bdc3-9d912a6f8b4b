import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App gradient-bg-welcome">
      
    <nav class="flex items-center justify-between flex-wrap gradient-bg-welcome p-6">
      <div class="flex items-center flex-shrink-0  text-white mr-6">
        <span class="font-bold text-xl">NEOBANK</span>
      </div>
     

      <div class="w-full block flex-grow sm:flex sm:items-center text-right sm:w-auto">
        <div class="text-sm sm:flex-grow">
          
          
          <a
            href="#"
            class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Accounts
          </a>
          <a
            href="#"
            class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4"
          >
            FAQ
          </a>
          <a
            href="#"
            class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Chatbot
          </a>
          <a
            href="#"
            class="block mt-4 sm:inline-block sm:mt-0 text-right text-teal-200 hover:text-white x mr-4"
          >
            Blog
          </a>
        </div>
        <div>
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0"
            >Login</a
          >
        </div>

        <div class="px-4 py-2">
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0"
            >Sign in</a
          >
        </div>
      </div>
    </nav>

    <div class=" container mt-5 mx-auto px-2 space-x-4 max-w-sm mx-auto flex p-3 border border-white-700 rounded-md	 bg-white-400 -lg shadow-xl">
      <div class="flex-shrink-0">
        <img src="https://cdn-icons-png.flaticon.com/512/5703/5703038.png" alt="" class="h-30 w-12" />
      </div>
      <div class="ml-6 pt-1 ">
        <h4 class="text-xl text-gray-300">WELCOME TO THE FUTURESTIC BANK</h4>
        <p class="text-base text-gray-100">You have a new message!</p>
      </div>
    </div>
    <div class="container mt-5 mx-auto px-2 space-x-4">
    <div
        class="bg-transparent border border-red-400 text-red-700 px-4 py-3 rounded relative my-3"
        role="alert"
      >
        <strong class="font-bold">Alert!</strong>
        <span class="block sm:inline">Hurry up!!!</span>
      </div>
    
    </div>

    <div class="container mt-5 mx-auto px-2 space-x-4">
     
      <button
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded space-x-4"
      >
        Send Money
      </button>
    

      <button
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
      >
         Advisory Services
      </button>
   
    </div>

   
   

   
    <div class="container mt-5 mx-auto px-2">
      
      <div class="md:flex">
        <div
          class="flex-1 text-gray-700 text-center bg-transparent px-5 py-5 m-2 rounded"
        >
          <div class="lg:flex lg:items-center">
            <div class="lg:flex-shrink-0">
              <img class="rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80" alt="" />
            </div>
            <div class="mt-4 lg:mt-0 lg:ml-6">
              <div
                class="uppercase tracking-wide text-sm white-glassmorphism text-indigo-600 font-bold"
              >
                Networking
              </div>
              <a
                href="#"
                class="block mt-1 text-lg leading-tight font-semibold text-white hover:underline"
                >Best platform to grow your business</a
              >
            </div>
          </div>
        </div>
        <div
          class="flex-1 text-gray-700 text-center bg-transparent px-5 py-5 m-2 rounded"
        >
          <div class="lg:flex lg:items-center">
            <div class="lg:flex-shrink-0">
              <img class="rounded-lg lg:w-64 " src="https://plus.unsplash.com/premium_photo-1661443781814-333019eaad2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1551&q=80
" alt="" />
            </div>
            <div class="mt-4 lg:mt-0 lg:ml-6">
              <div
                class="uppercase tracking-wide white-glassmorphism text-sm text-indigo-600 font-bold"
              >
                Marketing
              </div>
              <a
                href="#"
                class="block mt-1 text-lg leading-tight font-semibold  text-white hover:underline"
                >One seamless experience</a
              >
            </div>
          </div>
        </div>

        
      </div>
       <div
          class="flex-1 text-gray-700 text-center bg-gray-400 px-5 py-5 m-2 rounded"
        >
          <div class="lg:flex lg:items-center">
            <div class="lg:flex-shrink-0 items-center">
              <img class="rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1611095564985-89765398121e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
" alt="" />

            </div>
            <div class="mt-4 lg:mt-0 lg:ml-6">
              <div
                class="uppercase tracking-wide text-sm white-glassmorphism text-indigo-600 font-bold"
              >
                Pro Features
              </div>
              <a
                href="homes.html"
                class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
                >Bank anywhere</a
              >
            </div>
          </div>
        </div>
    </div>
    
    </div>
  );
}

export default App;
