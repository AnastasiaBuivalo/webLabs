<template>
    <li class="course_item">
        <div class='course_name'>
            <img src="logo512.png" alt="обложка"/>
        </div>
        <div class="course_name">{{course.name}}</div>
        <div>{{course.description}}</div>
    </li>
</template>

<script>
    export default {
    name: 'CourseItem',
    components: {
        
    },
    props: {
        course: {
            type: Object,
            required: true,
        }
    }
    }
</script>