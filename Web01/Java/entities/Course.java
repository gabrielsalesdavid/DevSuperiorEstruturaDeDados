package Web01.Java.entities;

public class Course {

    private Long id;
    private String title;
    private List<Lesson> lessons;
    
    public Course() {
    }

    public Course(Long id, String title) {
        this.id = id;
        this.title = title;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List getLessons() {
        return lessons;
    }

    public void addLesson(Lesson item) {

        lessons.add(item);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Course{");
        sb.append("id=").append(id);
        sb.append(", title=").append(title);
        sb.append(", lessons=").append(lessons);
        sb.append('}');
        return sb.toString();
    }
}