<template>
    <section class=" grid  h-auto mx-auto xs:p-10 sm:p-12  lg:px-24">






        <div class="px-4  sm:px-6 lg:px-8 max-w-7xl">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl text-white font-bold leading-tight pb-6  sm:text-4xl lg:text-5xl">Contactez
                    moi</h2>
            </div>


            <div class="grid grid-cols-1  md:grid lg:grid xl:grid gap-4 px-8 text-center md:px-0 md:grid-cols-2">
                <div class=" bg-white hidden md:grid lg:grid xl:grid rounded-xl">
                    <div class="p-6">
                        <svg class="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <p class="mt-6 xs:text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl font-medium text-gray-900">
                            07 68 31 36 49</p>


                    </div>
                </div>

                <div class=" bg-white hidden md:grid lg:grid xl:grid rounded-xl">
                    <div class="p-6">
                        <svg class="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <p class="mt-6 xs:text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl font-medium text-gray-900">
                            tachedencres90</p>
                        <p class=" xs:text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl font-medium text-gray-900">
                            @gmail.com</p>

                    </div>
                </div>


            </div>

            <div class="mt-4  bg-white rounded-xl">
                <div class=" px-10 py-2 ">

                    <form action="https://api.web3forms.com/submit" method="POST" class="mt-14">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Votre Nom </label>
                                <div class="mt-2.5 relative">
                                    <input type="text" name="name" id="name" placeholder="Entrer votre nom" required
                                        class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>

                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Email </label>
                                <div class="mt-2.5 relative">
                                    <input type="text" name="email" id="email" placeholder="Entrer votre Email" required
                                        class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <label for="" class="text-base font-medium text-gray-900"> Message </label>
                                <div class="mt-2.5 relative">
                                    <textarea name="message" id="" placeholder="" required
                                        class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                                        rows="4"></textarea>
                                </div>
                            </div>
                            <input type="hidden" name="redirect" value="https://web3forms.com/success ">
                            <!-- access key -->
                            <input type="hidden" name="access_key" value="cce3e454-080d-40c1-b4f3-09f2e9d879d1">
                            <div class="sm:col-span-2">
                                <button type="submit"
                                    class="inline-flex items-center z-30 justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                    Envoyer
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
svg {
    transition: transform 0.5s ease-in-out, fill 0.2s ease-in-out;
}

svg:hover {
    transform: translateY(-20x) scale(1.4);
    fill: #000000;
}
</style>