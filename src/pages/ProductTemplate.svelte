<script>
export let id;
export let location;
//global store
import products from '../stores/defaultProducts';
import Loading from '../components/Loading.svelte';
import {link} from 'svelte-routing';
import globalStore from '../stores/globalStore';

$: product = $products.find(item => item.id === parseInt(id))
</script>
<svelte:head>
  <title>{!product ? "single product" : product.title}</title>
</svelte:head>
{#if !product}
  <Loading/>
{:else}
  <section class="single-product">
    <!--Back to products -->
    <a href="/products" use:link class="btn btn-primary">Back to products</a>
    <!-- single product conatiner-->
    <div class="single-product-container">
      <article class="single-product-img">
        <img src={product.image} alt="product image">
      </article>
      <article>
        <h1>{product.title}</h1>
        <h2>{product.price}</h2>
        <p>{product.description}</p>
        <button class="btn btn-primary btn-block" on:click="{() =>
              globalStore.toggleItem('cart', true)
        }">
          add to cart
        </button>
      </article>
    </div>
  </section>
{/if}
