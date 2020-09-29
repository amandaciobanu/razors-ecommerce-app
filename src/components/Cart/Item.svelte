<script>
  export let id;
  export let image;
  export let title;
  export let price;
  export let amount;
//import cart methods

</script>

<!--cart item-->
<div class="cart-item">
  <img src={image} alt={title}>
  <div>
    <h4>{title}</h4>
    <h5>${price}</h5>
    <button class="cart-btn remove-btn" on:click="{() =>
      console.log('remove')
    }"></button>
  </div>
  <div >
    <button class="cart-btn amount-btn" on:click="{() =>
      console.log('increase')
    }">
      <i class="fas fa-chevron-up"></i>
    </button>
    <p class="item-amount">{amount}</p>
    <button class="cart-btn amount-btn" on:click="{() =>
      console.log('decrease')
    }">
      <i class="fas fa-chevron-down"></i>
    </button>
  </div>
</div>