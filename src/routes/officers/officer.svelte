<script lang="ts">
    import { base } from '$app/paths';

    export let name: string;
    export let profile: string;
    export let nickname: string;
    export let link: string | undefined;
    export let role: string | undefined;
</script>

<tr class="officer">
    <td style="background: url('{base}/assets/image/officers/{profile}.webp') no-repeat center; width: 150px; height: 150px; background-size: 150px;')"/>
    <td>
        <h3>{name}</h3>
        <h4>{nickname}</h4>
        <p>{role}<br/></p>
    </td>
</tr>