recuStudents = []
with open("./fixacao/file.txt") as gradesFile:
    for line in gradesFile:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            recuStudents.append(student_grade[0] + "\n")


with open("./fixacao/recuStudents.txt", mode="w") as recuStudentsFile:
    print(recuStudents)
    recuStudentsFile.writelines(recuStudents)