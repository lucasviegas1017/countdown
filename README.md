# countdown
Mini projeto utilizando as explicações do professor Jose de assis na plataforma workover academy
Vamos analisar e explicar o código fornecido detalhadamente:



### Explicação Detalhada

#### Variável Global
- `var check = false;`
  - Essa variável global é usada para garantir que a função `xequeMate` não seja executada várias vezes.

#### Função `xequeMate`
- `function xequeMate() { ... }`
  - Esta é a função principal que controla a contagem regressiva e os eventos associados.

- `if (check == false) { ... }`
  - Verifica se `check` é `false`. Se for, executa o bloco de código dentro do `if`. Isso impede que a contagem regressiva seja iniciada várias vezes.

- `var time1 = setInterval(function(){ start() }, 1000);`
  - Define um intervalo que executa a função `start` a cada 1000 milissegundos (1 segundo).

- `var time2 = setTimeout(function(){ end() }, 13200);`
  - Define um temporizador que executa a função `end` após 13200 milissegundos (13,2 segundos).

- `var count = 10;`
  - Inicializa a variável `count` com o valor 10. Esta variável será usada para a contagem regressiva.

##### Função `start`
- `function start() { ... }`
  - Esta função é chamada a cada segundo pelo `setInterval`.

- `soundBeep();`
  - Chama a função `soundBeep`, que toca um som curto de beep.

- `document.getElementById("time").innerHTML = count;`
  - Atualiza o elemento HTML com o id `time` para exibir o valor atual de `count`.

- `if (count == 0) { ... }`
  - Verifica se `count` chegou a 0. Se sim, executa o bloco de código dentro do `if`.

- `clearInterval(time1);`
  - Para o intervalo `time1`, interrompendo a execução contínua da função `start`.

- `soundThunder();`
  - Chama a função `soundThunder`, que toca um som de trovão.

- `document.getElementById("fire").src = "img/explosion.gif";`
  - Atualiza a fonte da imagem do elemento com o id `fire` para um gif de explosão.

- `document.getElementById("time").innerHTML = "Game Over";`
  - Atualiza o elemento HTML com o id `time` para exibir "Game Over".

- `count--;`
  - Decrementa a variável `count` em 1.

- `check = true;`
  - Define a variável `check` como `true` para evitar que a função `xequeMate` seja executada novamente.

#### Função `soundThunder`
- `function soundThunder() { ... }`
  - Esta função toca o som de trovão.

- `var beep = new Audio();`
  - Cria um novo objeto `Audio`.

- `beep.src = "Thunder_Crack.mp3";`
  - Define a fonte do áudio para "Thunder_Crack.mp3".

- `beep.play();`
  - Reproduz o áudio.

#### Função `soundBeep`
- `function soundBeep() { ... }`
  - Esta função toca um som curto de beep.

- `var beep = new Audio();`
  - Cria um novo objeto `Audio`.

- `beep.src = "Beep_Short.mp3";`
  - Define a fonte do áudio para "Beep_Short.mp3".

- `beep.play();`
  - Reproduz o áudio.

#### Função `end`
- `function end() { ... }`
  - Esta função é chamada após 13,2 segundos para "limpar" a imagem de explosão.

- `document.getElementById("fire").src = "img/clean.png";`
  - Atualiza a fonte da imagem do elemento com o id `fire` para "img/clean.png", removendo a explosão.

### Resumo
Este código define uma contagem regressiva que começa quando a função `xequeMate` é chamada pela primeira vez. A contagem regressiva é exibida em um elemento HTML com o id `time`, e a cada segundo um som de beep é tocado. Quando a contagem atinge 0, a contagem é interrompida, um som de trovão é tocado, uma imagem de explosão é mostrada, e a mensagem "Game Over" é exibida. Após 13,2 segundos, a imagem de explosão é removida. A variável `check` impede que a contagem regressiva seja reiniciada se a função `xequeMate` for chamada novamente.
