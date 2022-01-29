<template>
  <div>
    <Student name="张三" sex="男" :age="18" />
    <hr />
    <Student name="李四" sex="女" />
  </div>
</template>

<script>
import Student from "./components/Student";
export default {
  name: "App",
  components: { Student },
};
</script>