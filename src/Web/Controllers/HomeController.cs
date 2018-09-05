using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Web.Models;

namespace Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            var pokemon = new List<PokemonViewModel>
            {
                new PokemonViewModel
                {
                    Name = "Bulbasaur",
                    Number = 1,
                    ThumbnailUri = "/cdn/img/pokemon/thumbnails/001.png"
                },
                new PokemonViewModel
                {
                    Name = "Charmander",
                    Number = 4,
                    ThumbnailUri = "/cdn/img/pokemon/thumbnails/004.png"
                },
                new PokemonViewModel
                {
                    Name = "Squirtle",
                    Number = 7,
                    ThumbnailUri = "/cdn/img/pokemon/thumbnails/007.png"
                },new PokemonViewModel
                {
                    Name = "Pikachu",
                    Number = 25,
                    ThumbnailUri = "/cdn/img/pokemon/thumbnails/025.png"
                }
            };

            return View(pokemon);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
