function Card() {
    return (
      <>
        <div class="flex justify-center items-center h-screen w-full bg-gradient-to-r from-red-700 to-white">
          <div class="w-1/2 bg-white rounded-lg shadow-2x1 p-8 m-4">
  
            <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
              Registrasi
            </h1>
            
            <form action="/" method="post">
              <div class="flex flex-col mb-7">
                <label
                  class="mb-2 font-bold text-lg text-gray-900"
                  for="nama"
                >
                  Nama
                </label> 
                <input
                  class="border py-2 px-3 text-grey-800"
                  type placeholder="Heris Tenno Janis"
                  name="nama"
                  id="nama"
                  
                />
                <label
                  class="mb-2 font-bold text-lg text-gray-900"
                  for="nama"
                > <br></br>
                  Tempat/Tanggal lahir
                </label>
                <input
                  class="border py-2 px-3 text-grey-800"
                  type="date"
                  name="nama"
                  id="nama"
                />
                <label
                  class="mb-2
                  font-bold 
                  text-lg 
                  text-gray-900"
                  for="nama"
                ><br></br>
                  Jenis Kelamin
                </label>
                <input
                  class="border py-2 px-3 text-grey-800"
                  type placeholder="Laki-Laki"
                  name="nama"
                  id="nama"
                />

              </div>
            
              <button
                class="block bg-orange-400 hover:bg-orange-600 text-white uppercase text-lg mx-auto p-4 rounded"
                type="submit"
              >
                Buat Akun
              </button>
            </form>
            <a
              class="block w-full text-center no-underline mt-5 text-sm text-gray-700 hover:text-gray-900"
              href="/"
            >
              Telah memiliki Akun?
            </a>
          </div>
        </div>
      </>
    );
  }
  
  export default Card;