import com.fasterxml.jackson.databind.ObjectMapper;

import Web01.Java.entities.Course;

public class Main {

    public static void main(String[] args) {

        ObjectMapper obj = new ObjectMapper();

        obj.registerModule(new JavaTimeModule());

        try {

            File jsonFile = new File("C:\\Users\\Gabriel Sales David\\
            Documents\\Estudos\\Cursos\\Tecnologia\\DevSuperior\\
            Fundação de Programação\\6 - Estrutura de Dados e Algoritmos\\
            Atividades\\JavaScript\\Web01\\Java\\resources\\file.json");

            List<Course> courses = obj.readValue(jsonFile, new TypeReference<List<Course>>(){});
            
            for(Course course : courses) {

                System.out.println("Course Id: " + course.getId());
                System.out.println("Course Title: " + course.getTitle());

                List<Lesson> lessons = course.getLessons();

                for(Lesson lesson : lessons) {

                    System.out.println();
                    System.out.println("id: " + lesson.getId());
                    System.out.println("title: " + lesson.getTitle());
                    System.out.println("media: " + lesson.getMedia());
                    System.out.println("timestamp: " lesson.getTimestamp());
                }
            }
        } catch(IOException e) {

            e.printStackTrace();
        }
    }
}