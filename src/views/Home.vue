<template>
  <main class="container">
    <img
      src="../assets/img/pie.svg"
      alt="Pie graph"
      class="pie-graph"
    >
    <section>
      <h1>Por um excelente curso</h1>
      <p>
        O objetivo dessa avaliação é compreender melhor a realidade do curso de
        bacharelado em Sistemas de Informação a partir da coleta de opiniões
        sobre o ensino das disciplinas.
      </p>
      <p>
        Sua participação é de fundamental
        importância! A coleta de dados vai ser totalmente anônima, por favor
        tente ser o mais sincero possível nas respostas.
      </p>
      <p>
        Ao final da coleta,
        todos os dados, bem como todo o passo a passo do processo, serão
        disponibilizados de forma totalmente aberta.
      </p>
      <p>
        Por favor, responda o
        questionário apenas uma vez para cada disciplina que tenha pago no
        semestre vigente. Se, por ventura, você desistiu de alguma disciplina,
        não deixe de responder o questionário, haverá um campo aberto para
        contar o motivo da desistência.
      </p>

      <div class="button-container">
        <router-link to="/about">
          <button>
            Responder questionário
          </button>
        </router-link>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: @base-margin * 2;
  padding: @base-padding * 2;
}

.pie-graph {
  width: 400px;
  margin-right: @base-margin * 2;
}

section {
  text-align: left;
  h1 {
    color: @color-primary;
    font-size: 2rem;
  }

  p {
    font-size: 1.6rem;
    color: @color-secondary;
  }

  .button-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      padding: @base-padding;
      border-radius: @base-radius;
      border: none;
      background-color: @color-primary;
      cursor: pointer;
      color: @color-white;

      &:hover {
        background-color: @color-secondary;
      }
    }
  }
}
</style>
