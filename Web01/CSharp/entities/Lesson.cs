namespace DevSuperior {

    class Lesson {

        public int Id {get; set;}
        punlic string Title {get; set;}
        public string Media {get; set;}
        public DateTime Timestamp {get; set;}

        public Lesson() {
        }

        public Lesson(int id, string title, string media, DateTime timestamp) {

            Id = id;
            Title = tile;
            Media = Media;
            Timestamp = Timestamp;
        }
    }
}