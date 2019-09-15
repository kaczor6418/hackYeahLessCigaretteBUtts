<template>
    <div class="body">
        <div  v-for="article in articles">
            <article-container :article-data="article"></article-container>
        </div>
    </div>
</template>

<script>
    import ArticleContainer from "./article/ArticleContainer";
    export default {
        name: "BodyContainer",
        components: {ArticleContainer},
        data() {
            return {
                articles: [
                    {
                        title: 'Why cigarette butts are toxic',
                        body: 'Cigarette butts are the most common form of litter, as an estimated 4.5 trillion cigarette butts are thrown away every year worldwide. Many chemical products are used during the course of growing tobacco and manufacturing cigarettes, the residues of which may be found in cigarettes prepared for consumption. Additionally, over 4000 chemicals may also be introduced to the environment via cigarette particulate matter (tar) and mainstream smoke. Using US Environmental Protection Agency standard acute fish bioassays, cigarette butt-derived leachate was analysed for aquatic toxicity. Survival was the single endpoint and data were analysed using Comprehensive Environmental Toxicity Information System to identify the LC50 of cigarette butt leachate to fish. The LC50 for leachate from smoked cigarette butts (smoked filter + tobacco) was approximately one cigarette butt/l for both the marine topsmelt (Atherinops affinis) and the freshwater fathead minnow (Pimephales promelas). Leachate from smoked cigarette filters (no tobacco), was less toxic, with LC50 values of 1.8 and 4.3 cigarette butts/l, respectively for both fish species. Unsmoked cigarette filters (no tobacco) were also found to be toxic, with LC50 values of 5.1 and 13.5 cigarette butts/l, respectively, for both fish species. Toxicity of cigarette butt leachate was found to increase from unsmoked cigarette filters (no tobacco) to smoked cigarette filters (no tobacco) to smoked cigarette butts (smoked filter + tobacco). This study represents the first in the literature to investigate and affirm the toxicity of cigarette butts to fish, and will assist in assessing the potential ecological risks of cigarette butts to the aquatic environment.' + '\n\n' + 'To learn more visit this site: https://www.researchgate.net',
                        image: 'https://images.pexels.com/photos/247040/pexels-photo-247040.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
                    },
                    {
                        title: 'Why people will keep cigarette butts',
                        body: 'The people who smoke are the main causes of those trashes, so these group of people need a special solution which will give them a reason to not to throw their butt away. A little bit of personal profit will work to change those bad personal habits. By using an app which will be created for the people who smoke, users will have 10% discount on any cigarette packs which they prefer by returning all of the cigarette butts in their cigarette pack. It is aimed to make people who smoke avoid to throw away their cigarette butts on the floor by this application which encourages collecting cigarette butts directly by the consumer. Accounts can be created in web aplications and it provides the data of the returned butts to be processed so the consumers can use this 10% of discount whenever they wish.',
                        image: 'https://images.pexels.com/photos/1131438/pexels-photo-1131438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    },
                    {
                        title: 'Why people will pick up cigarette butts',
                        body: 'People who do not smoke can also take part in solving butt littering problem as well as getting an additional profit for themselves by using the app. \'\'Cigarette butt automats\'\' which will be placed in spesific points in public spaces such as parks and beaches can be quite helpful in combating problems related to cigarette waste. By downloading the mobile app, users can create their own accounts and after verifying their identity from the automat, collected butts are thrown into the automat. After the automat analyses the weight and the number of the butts, credits will be charged on the accounts. The users who will be collected enough credits can use those credits on shopping from specific shops on specific products.',
                        image: 'https://images.pexels.com/photos/1353365/pexels-photo-1353365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
