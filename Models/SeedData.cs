using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using DVDMovie.Models;

namespace DVDMovie {
    public class SeedData {
        public static void SeedDataBase(DataContext context) {
            if(context.Database.GetMigrations().Count() > 0
                && context.Database.GetPendingMigrations().Count() == 0
                && context.Movies.Count() == 0) {
                    var s1 = new Studio {
                        Name = "Moonlight Entertainment",
                        City = "San Jose", State = "CA"
                    };

                    var s2 = new Studio {
                        Name = "Paramount",
                        City = "Chicago", State = "IL"
                    };

                    var s3 = new Studio {
                        Name = "MGM",
                        City = "New York", State = "NY"
                    };

                    context.Movies.AddRange(
                        new Movie {
                            Name = "Titanic",
                            Description = "A 17-year-old aristocratic falls in love for...",
                            Category = "Drama", Price = 75, Studio = s1,
                            Ratings = new List<Rating> {
                                new Rating { Stars = 4 }, new Rating { Stars = 5 }, new Rating { Stars = 5 }
                            }
                        },
                        new Movie {
                            Name = "The Godfather",
                            Description = "The aging patriarch of an organized cri...",
                            Category = "Thriller", Price = 48, Studio = s1,
                            Ratings = new List<Rating> {
                                new Rating { Stars = 3 }, new Rating { Stars = 4 }, new Rating { Stars = 2 }
                            }
                        },

                        new Movie {
                            Name = "Team America",
                            Description = "Broadway actor Gary Johnston is recruited...",
                            Category = "Comedy", Price = 34, Studio = s2,
                            Ratings = new List<Rating> {
                                new Rating { Stars = 1 }, new Rating { Stars = 2 }, new Rating { Stars = 2 }
                            }
                        },

                        new Movie {
                            Name = "Wedding Crashers",
                            Description = "Committed womanizers sneak into wedding..",
                            Category = "Comedy", Price = 19, Studio = s2,
                            Ratings = new List<Rating> {
                                new Rating { Stars = 4 }, new Rating { Stars = 2 }, new Rating { Stars = 5 }
                            }
                        },

                        new Movie {
                            Name = "Love Actually",
                            Description = "Eigh different couples deal with....",
                            Category = "Romance", Price = 75, Studio = s3,
                            Ratings = new List<Rating> {
                                new Rating { Stars = 3 }, new Rating { Stars = 4 }, new Rating { Stars = 2 }
                            }
                        },

                        new Movie {
                            Name = "The Way We Are",
                            Description = "Two desperate people have a wonderfull r....",
                            Category = "Romance", Price = 35, Studio = s3,
                            Ratings = new List<Rating> {
                                new Rating { Stars = 4 }, new Rating { Stars = 4 }, new Rating { Stars = 1 }
                            }
                        },

                        new Movie {
                            Name = "Ghost",
                            Description = "After a young man is murdered, his spirit....",
                            Category = "Romance", Price = 15, Studio = s3,
                            Ratings = new List<Rating> {
                                new Rating { Stars = 2 }, new Rating { Stars = 3 }, new Rating { Stars = 2 }
                            }
                        }
                    );

                    context.SaveChanges();
                }
        }
    }
}