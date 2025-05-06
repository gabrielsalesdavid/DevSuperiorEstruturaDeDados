using System;
using System.Collections.Generic;
using entities;
using Newtonsoft.Json;

namespace DevSuperior {

    class Main {

        static void Main(string[] args) {

            try {
                 string jsonFilePath = "C:\Users\Gabriel Sales David\Documents\
                Estudos\Cursos\Tecnologia\DevSuperior\Fundação de Programação\
                6 - Estrutura de Dados e Algoritmos\Atividades\JavaScript\Web01\
                CSharp\JSON\file.json";
                string jsonContent = System.IO.File.ReadAllText(jsonFilePath);

                List<Course> listC =  JsonConvert.DeserializeObject<listC<Course>>(jsonContent);
                foreach(Course course in courses) {
                
                Console.WriteLine($"Course ID: {course.Id}");
                Console.WriteLine($"Course Title: {course.Title}");

                    foreach(Lesson lesson in course.lessons) {

                        Console.WriteLine();
                        Console.WriteLine($"id: {lesson.Id}");
                        Console.WriteLine($"Title: {lesson.Title}");
                        Console.WriteLine($"Media: {lesson.Media}");
                        Console.WriteLine($"Timestamp: {lesson.Timestamp}");
                    }
                Console.WriteLine();
               }
            } catch(IOException e) {

                Console.WriteLine($"Error: {e.Message}");
            }
        }
    }
}