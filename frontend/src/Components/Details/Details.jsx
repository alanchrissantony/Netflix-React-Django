import React from 'react'
import './Details.css'


function Details() {
  return (
    <div>
        <main class='bg-primary_black min-h-screen w-full'>
        <section class="h-screen relative bg-no-repeat pb-8 pl-6 flex justify-end items-end bg-cover detailsSection">
            <div>
                <h2 class="text-6xl font-semibold text-white my-4">
                {'Spider-Man: No Way Home'}
                </h2>
                <p class=" w-11/12 md:w-5/12 font-medium text-white my-4">
                {"With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."}
                </p>
                <div class="flex my-4">
                    <a href="/">
                        <button class="flex items-center bg-white py-2 px-5 rounded-md detailsPlayBtn">
                            <ion-icon name="play" class="text-2xl"></ion-icon>
                            <span class="ml-3 font-medium">
                                Play
                            </span>
                        </button>
                    </a>
    
                    
                </div>
            </div>
        </section> 
        <section class='bg-primary_black  min-h-screen flex justify-center py-10'>
            <div class="p-8 w-10/12 relative" >

                <div className='detailsEpisodeSection'>
                
                    <h2 class="text-gray-200 text-3xl font-medium">
                        Episode
                    </h2>

                        <h3 class='text-lg'>
                            <a href="/">
                            

                            </a>
                        </h3>

                
                </div>

                <h2 class="text-gray-200 text-3xl font-medium">
                    Description
                </h2>
                <div class="flex justify-center  items-center min-w-full  movie_lis">
                    <p class="text-gray-100 text-lg">
                    {"Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and Spider-Man: Far From Home (2019), and the 27th film in the Marvel Cinematic Universe (MCU). The film was directed by Jon Watts and written by Chris McKenna and Erik Sommers. It stars Tom Holland as Peter Parker / Spider-Man alongside Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau, Jamie Foxx, Willem Dafoe, Alfred Molina, Benedict Wong, Tony Revolori, Marisa Tomei, Andrew Garfield, and Tobey Maguire. In the film, Parker asks Dr. Stephen Strange (Cumberbatch) to use magic to make his identity as Spider-Man a secret again following its public revelation at the end of Far From Home. When the spell goes wrong, the multiverse is broken open which allows visitors from alternate realities to enter Parker's universe. A third MCU Spider-Man film was planned during the production of Homecoming in 2017. Negotiations between Sony and Marvel Studios to alter their deal—in which they produce the Spider-Man films together—ended with Marvel Studios leaving the project in August 2019, but a negative fan reaction led to a new deal between the companies a month later. Watts, McKenna, Sommers, and Holland were set to return, and filming took place from October 2020 to March 2021 in New York City and Atlanta. No Way Home features several actors reprising their roles from the earlier, non-MCU Spider-Man films that were directed by Sam Raimi and Marc Webb, including previous Spider-Man actors Maguire and Garfield. The involvement of both actors was the subject of wide speculation and numerous leaks despite the efforts of Sony, Marvel, and the cast to conceal their involvement. Spider-Man: No Way Home premiered at the Fox Village Theatre in Los Angeles on December 13, 2021, and was theatrically released in the United States on December 17, as part of Phase Four of the MCU. The film received positive reviews from critics, who praised the story, direction, action sequences, and the casts performances and chemistry. No Way Home has grossed over $1.8 billion worldwide, surpassing its predecessor as the highest-grossing film released by Sony Pictures. It became the highest-grossing film of 2021, the sixth-highest-grossing film of all time, the highest grossing Spider-Man film, and set several other box office records, including those for films released during the COVID-19 pandemic. The film received numerous awards and nominations, including a nomination for Best Visual Effects at the 94th Academy Awards. A sequel is in development."}
                    </p>
                </div>
            </div>
        </section>
        
    </main>
    </div>
  )
}

export default Details