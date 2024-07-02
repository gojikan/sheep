document.addEventListener('DOMContentLoaded', function() {
    const messages = [
      "나는 선한 목자라 선한 목자는 양들을 위하여 목숨을 버리거니와 (요한복음 10:11)",
      "너희 중에 어느 사람이 양 일백 마리가 있는데 그 중에 하나를 잃으면 아흔 아홉 마리를 들에 두고 그 잃은 것을 찾도록 찾아 다니지 아니하느냐 또 찾은즉 즐거워 어깨에 메고 집에 와서 그 벗과 이웃을 불러 모으고 말하되 나와 함께 즐기자 나의 잃은 양을 찾았노라 하리라 (누가복음 15:4-6)",
      "너희 생각에는 어떻겠느뇨 만일 어떤 사람이 양 일백 마리가 있는데 그 중에 하나가 길을 잃었으면 그 아흔 아홉 마리를 산에 두고 가서 길 잃은 양을 찾지 않겠느냐 진실로 너희에게 이르노니 만일 찾으면 길을 잃지 아니한 아흔 아홉 마리보다 이것을 더 기뻐하리라 (마태복음 18:12-13)",
      "목자가 양 가운데 있는 날에 양이 흩어졌으면 그 떼를 찾는 것 같이 내가 내 양을 찾아서 흐리고 캄캄한 날에 그 흩어진 모든 곳에서 그것들을 건져낼지라 (에스겔 34:12)",
      "나 주 여호와가 말하노라 내가 친히 내 양의 목자가 되어 그것들로 누워 있게 할지라 그 잃어버린 자를 내가 찾으며 쫓긴 자를 내가 돌아오게 하며 상한 자를 내가 싸매어 주며 병든 자를 내가 강하게 하려니와 살찐 자와 강한 자는 내가 멸하고 공의대로 그것들을 먹이리라 (에스겔 34:15-16)",
      "인자의 온 것은 잃어버린 자를 찾아 구원하려 함이니라 (누가복음 19:10)",
      "너희가 전에는 양과 같이 길을 잃었더니 이제는 너희 영혼의 목자와 감독 되신 이에게 돌아왔느니라 (베드로전서 2:25)",
      "내가 일어나 아버지께 가서 이르기를 아버지여 내가 하늘과 아버지께 죄를 얻었사오니 지금부터는 아버지의 아들이라 일컬음을 감당치 못하겠나이다 나를 품군의 하나로 보소서 하리라 하고 이에 일어나서 아버지께로 돌아가니라 아직도 상거가 먼데 아버지가 저를 보고 측은히 여겨 달려가 목을 안고 입을 맞추니 (누가복음 15:18-20)"
    ];
  
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = randomMessage;
    const mee = document.getElementById('mee');

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    const image = new Image();
    image.src = 'images/sheep.jpg';
  
    image.onload = function() {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
      drawMessageBackground(randomMessage);
    };
  
    canvas.addEventListener('touchmove', function(e) {
        e.preventDefault(); // 터치 시 기본 동작(스크롤) 막기
          
        const rect = canvas.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;
    
        eraseCircle(ctx, x, y, 10, 0.04); // 지우는 영역을 원형으로 크게 설정
    
        // Remove previous mee elements after 1 second
        const previousMees = document.querySelectorAll('.mee');
        previousMees.forEach(element => {
          element.style.animation = ''; // Disable animation to remove element smoothly
          setTimeout(() => element.remove(), 1000); // Remove element after 1 second
        });
    
        // Create new mee element
        const mee = document.createElement('div');
        mee.classList.add('mee');
        mee.textContent = '메에~';
        mee.style.position = 'absolute';
        mee.style.top = `${y}px`;
        mee.style.left = `${x}px`;
    
        document.body.appendChild(mee);
    });
    
  
  
    function eraseCircle(context, x, y, radius, alpha) {
       
        context.globalCompositeOperation = 'destination-out';
        context.globalAlpha = alpha; // 투명도 설정
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2, false);
        context.fill();
        context.globalCompositeOperation = 'source-over';
       // context.globalAlpha = 1; // 원래의 투명도로 되돌리기 (선택 사항)
      
      }
      

     



    function drawMessageBackground(message) {
      ctx.globalCompositeOperation = 'destination-over';
      ctx.font = '24px sans-serif';
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      wrapText(ctx, message, canvas.width / 2, canvas.height / 2, canvas.width - 20, 30);
      ctx.globalCompositeOperation = 'source-over';
    }
  
    function wrapText(context, text, x, y, maxWidth, lineHeight) {
      const words = text.split(' ');
      let line = '';
      let testLine = '';
      let testWidth = 0;
  
      for (let n = 0; n < words.length; n++) {
        testLine += `${words[n]} `;
        testWidth = context.measureText(testLine).width;
        if (testWidth > maxWidth && n > 0) {
          context.fillText(line, x, y);
          line = `${words[n]} `;
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      context.fillText(line, x, y);
    }
  
   
  });
  
