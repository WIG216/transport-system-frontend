import api from "./apiClient";

const createCourseContent = (data: any) => {
    return api.post('/course-content', data);
}

const getCourseContents = () => {
    return api.get('/course-contents');
}

const getClassCourseContents = (classId: string) => {
    return api.get(`/course-contents/class/${classId}`);
}

const deleteCourseContent = (id: any) => {
    return api.delete(`/course-content/${id}`)
}


export {
    createCourseContent,
    getCourseContents,
    getClassCourseContents,
    deleteCourseContent
}

