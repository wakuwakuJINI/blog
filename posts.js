
    
    
      $(document).ready(() => {
        // API 호출
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((json) => {
            console.log(json);

            // 100개의 포스트 가져오기  
            const posts = json.slice(0, 100);
            //새로운 div 요소 생성
            posts.forEach((element, index) => {
              const $postBox = $("<div>")
                .addClass("post-box")
                .append(
                   $("<h4>").text(`ID: ${element.id}`), //$(" ") ->jquery를 사용하여 새로운 HTML 요소 생성.
                   $("<p>").text(`Title: ${element.title}`),
                   $("<p>").text(`Body: ${element.body}`)
                );

            // #allPosts 컨테이너에 postBox 추가          
              $("#allPosts").append($postBox);
            });
          });
      });
  