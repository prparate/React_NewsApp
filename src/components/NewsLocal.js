import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export default class NewsLocal extends Component {

    increment = 4

    static defaultProps = {
        category : 'general'      
    }

    static propTypes = {
        category : PropTypes.string
    }

    capitalizeFirstLetter(cat) {
        return cat.charAt(0).toUpperCase() + cat.slice(1);
    }

    constructor(props){
        super(props)
        document.title = `NewsMonkey - ${this.capitalizeFirstLetter(this.props.category)}`
        this.state = {
            articles : [],
            totalResults : 0,
            data : [{"source":{"id":"polygon","name":"Polygon"},"author":"Russ Frushtick","title":"Dead Cells: Return to Castlevania DLC review: gothic roguelike nostalgia - Polygon","description":"Alucard, Richter, and the gang join forces with the Dead Cells crew for a romp in this impressive paid DLC featuring many familiar characters and areas from the Castlevania series.","url":"https://www.polygon.com/reviews/23624279/dead-cells-return-to-castlevania-dlc-review-roguelike-release-date-switch-ps5-pc-xbox","urlToImage":"https://cdn.vox-cdn.com/thumbor/P6uwZCjTa0XJYI2fT6_Q4KbYABo=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24476998/ss_3bc1bb8d62cf8864f16e4b11ce27c4ebb47ff13f.1920x1080.jpg","publishedAt":"2023-03-06T14:00:00Z","content":"Dead Cells development studio, Motion Twin, has never been bashful about leaning into the roguelites Castlevania-inspired roots. From the 2D side-scrolling medieval levels to the Metroidvania-esque e… [+4119 chars]"},{"source":{"id":"the-washington-post","name":"The Washington Post"},"author":"Laurie McGinley","title":"How Jimmy Carter boosted a life-saving cancer drug - The Washington Post","description":"A dire health threat to the former president in 2015 put the spotlight on a pathbreaking immune therapy.","url":"https://www.washingtonpost.com/health/2023/03/06/jimmy-carter-melanoma-cancer-immune-therapy/","urlToImage":"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/JZGVVTKBQUH36FR45VMRE4S4BM_size-normalized.jpg&w=1440","publishedAt":"2023-03-06T14:00:00Z","content":"Comment on this story\r\nWhen Norman C. Sharpless, a former director of the National Cancer Institute, talked to members of Congress about exciting new developments in immune therapy, their eyes would … [+6987 chars]"},{"source":{"id":null,"name":"SciTechDaily"},"author":null,"title":"Don't Miss: Worm Moon AKA Death Moon - SciTechDaily","description":"The Next full moon is the Crow, Crust, Sap, Sugar, or Worm Moon; the Lenten, Chaste, or Death Moon, the full moon of Purim; the full moon of Holi; Māgha Pūjā and Medin Poya; Mid-Sha'ban; and the Pothole Moon. The next full moon will be Tuesday morning, March …","url":"https://scitechdaily.com/?p=258400","urlToImage":"https://scitechdaily.com/images/Full-Moon-Over-Mountains.jpg","publishedAt":"2023-03-06T13:38:32Z","content":"ByGordon Johnston, NASAMarch 6, 2023\r\nThe next full moon has many names including Crow, Crust, Sap, Sugar, Worm, or Death Moon. Southern Native American tribes called it the Worm Moon because earthwo… [+25426 chars]"},{"source":{"id":"usa-today","name":"USA Today"},"author":"USA TODAY","title":"Four Americans kidnapped in Tamaulipas, Mexico, FBI says - USA TODAY","description":null,"url":"https://www.usatoday.com/story/news/nation/2023/03/06/americans-kidnapped-tamaulipas-mexico/11411073002/","urlToImage":null,"publishedAt":"2023-03-06T13:20:29Z","content":null},{"source":{"id":"associated-press","name":"Associated Press"},"author":"Jeff Martin","title":"35 detained after violence at Atlanta police training site - The Associated Press - en Español","description":"ATLANTA (AP) — Nearly three dozen people have been detained after flaming bottles and rocks were thrown at officers during a protest at “Cop City,” a new police training center that's been the site of prior demonstrations and the death of a protester, Atlanta…","url":"https://apnews.com/article/atlanta-police-training-site-protest-fire-1ba4362c9337e27ecaf44283fc72fc56","urlToImage":"https://storage.googleapis.com/afs-prod/media/afs:Medium:751921853724/700.png","publishedAt":"2023-03-06T12:50:58Z","content":"ATLANTA (AP) Nearly three dozen people have been detained after flaming bottles and rocks were thrown at officers during a protest at Cop City, a new police training center thats been the site of pri… [+4442 chars]"},{"source":{"id":null,"name":"CNBC"},"author":"Mike Calia","title":"5 things to know before the stock market opens Monday - CNBC","description":"Here are the most important news items that investors need to start their trading day.","url":"https://www.cnbc.com/2023/03/06/5-things-to-know-before-the-stock-market-opens-monday-march-6.html","urlToImage":"https://image.cnbcfm.com/api/v1/image/107202988-1677860599615-gettyimages-1247675070-AFP_33AF93L.jpeg?v=1678106581&w=1920&h=1080","publishedAt":"2023-03-06T12:43:01Z","content":"Traders work on the floor of the New York Stock Exchange on March 3, 2023. \r\nHere are the most important news items that investors need to start their trading day:\r\n1. Entering a pivotal week\r\nU.S. s… [+3919 chars]"},{"source":{"id":null,"name":"CNBC"},"author":"John Rosevear","title":"Lordstown Motors (RIDE) Q4 2022 results, EV deliveries, cash - CNBC","description":"Lordstown ended the year with over $220 million in cash as it pivots to work with Foxconn on a new electric vehicle program.","url":"https://www.cnbc.com/2023/03/06/lordstown-motors-ride-q4-2022-results-deliveries.html","urlToImage":"https://image.cnbcfm.com/api/v1/image/106894672-1623266336254-gettyimages-1232963600-LORDSTOWN_EARNS.jpeg?v=1678106428&w=1920&h=1080","publishedAt":"2023-03-06T12:40:28Z","content":"Lordstown Motors said Monday that it still had more than $220 million in cash at the end of 2022, despite ongoing challenges that halted production of its Endurance electric pickup after just six wer… [+2049 chars]"},{"source":{"id":"the-hill","name":"The Hill"},"author":"Julia Mueller","title":"DeSantis blasts ‘leftist politicians,’ touts Florida’s ‘massive gains’ in California speech - The Hill","description":"Florida Gov. Ron DeSantis (R) on Sunday blasted “leftist politicians” and touted his state’s “massive gains” in a speech in California amid speculation that he’ll jump into the 2024 presidential race.  “We’ve witnessed a great American exodus from states gove…","url":"https://thehill.com/homenews/campaign/3885785-desantis-blasts-leftist-politicians-touts-floridas-massive-gains-in-california-speech/","urlToImage":"https://thehill.com/wp-content/uploads/sites/2/2023/02/desantisron_021523ap_w.jpeg?w=1280","publishedAt":"2023-03-06T12:40:00Z","content":"Skip to content\r\nFlorida Gov. Ron DeSantis (R) on Sunday blasted “leftist politicians” and touted his state’s “massive gains” in a speech in California amid speculation that he’ll jump into the 2024 … [+1794 chars]"},{"source":{"id":"cnn","name":"CNN"},"author":"Reuters","title":"Tesla cuts prices on its most expensive models - CNN","description":"Tesla has cut prices on its two most expensive electric vehicles in the United States, according to the company's website, days after CEO Elon Musk said recent price cuts on other models had stoked demand.","url":"https://www.cnn.com/2023/03/06/business/tesla-cuts-prices/index.html","urlToImage":"https://media.cnn.com/api/v1/images/stellar/prod/230306121431-tesla-price-cuts-081016.jpg?c=16x9&q=w_800,c_fill","publishedAt":"2023-03-06T12:33:00Z","content":"Tesla has cut prices on its two most expensive electric vehicles in the United States, according to the companys website, days after CEO Elon Musk said recent price cuts on other models had stoked de… [+1958 chars]"},{"source":{"id":null,"name":"BBC News"},"author":"https://www.facebook.com/bbcnews","title":"Southwest plane makes emergency landing in Cuba after bird strike - BBC","description":"The cabin filled with smoke after take-off which sparked panic on the US-bound flight from Cuba.","url":"https://www.bbc.com/news/world-us-canada-64842270","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/110F2/production/_128847896_gettyimages-1245858893.jpg","publishedAt":"2023-03-06T12:16:50Z","content":"A Southwest US-bound flight was forced to make an emergency landing after birds struck the plane's engine, the airline said. \r\nThe plane - flying from Havana to Fort Lauderdale, Florida - filled with… [+1184 chars]"},{"source":{"id":null,"name":"Seeking Alpha"},"author":"Clark Schultz","title":"Altria confirms acquisition of NJOY Holdings - Seeking Alpha","description":"Altria (MO) confirmed a deal to acquire NJOY Holdings for $2.75B in cash. Read more.","url":"https://seekingalpha.com/news/3944344-altria-confirms-275b-acquisition-of-njoy-holdings","urlToImage":"https://static.seekingalpha.com/cdn/s3/uploads/getty_images/968446118/image_968446118.jpg?io=getty-c-w750","publishedAt":"2023-03-06T12:13:00Z","content":"krblokhin/iStock Editorial via Getty Images\r\nAltria (NYSE:MO) confirmed on Monday a deal to acquire NJOY Holdings for $2.75B in cash. The deal includes $500M in cash payments contingent on certain re… [+744 chars]"},{"source":{"id":"reuters","name":"Reuters"},"author":null,"title":"Wagner representative barred from Russian army HQ in Ukraine, its boss says - Reuters","description":"Russian mercenary boss Yevgeny Prigozhin said his representative had been denied access to the headquarters of Russia's military command in Ukraine on Monday, in a further deepening of his rift with the defence establishment.","url":"https://www.reuters.com/world/europe/russias-wagner-chief-warns-frontline-collapse-if-forced-retreat-bakhmut-2023-03-06/","urlToImage":"https://www.reuters.com/resizer/Dx8p71Nj_gLJCKtsYZtjaxYd6y4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OTZBD5CBUVKDRFQ7HCRFNBOKJQ.jpg","publishedAt":"2023-03-06T12:11:00Z","content":"March 6 (Reuters) - Russian mercenary boss Yevgeny Prigozhin said his representative had been denied access to the headquarters of Russia's military command in Ukraine on Monday, in a further deepeni… [+1935 chars]"},{"source":{"id":null,"name":"Deadline"},"author":"Ted Johnson","title":"Hoda Kotb Returns To ‘Today’ After Absence Due To Daughter’s Health Issue; Savannah Guthrie Also Back After Covid Test - Deadline","description":"Hoda Kotb returned to Today on Monday, telling viewers that her extended absence was due to her three-year-old daughter’s health issue. “My youngest Hope was in the ICU for a few days, …","url":"https://deadline.com/2023/03/hoda-kotb-today-daugther-health-issue-1235280291/","urlToImage":"https://deadline.com/wp-content/uploads/2023/03/image004.png?w=690","publishedAt":"2023-03-06T12:11:00Z","content":"Hoda Kotb returned to Todayon Monday, telling viewers that her extended absence was due to her three-year-old daughter’s health issue.\r\n“My youngest Hope was in the ICU for a few days, in the hospita… [+1262 chars]"},{"source":{"id":null,"name":"syracuse.com"},"author":"The Associated Press","title":"Can’t take statins? New pill cuts cholesterol, heart attacks - syracuse.com","description":"A new study offers the first evidence that the drug reduces the risk of cholesterol-caused health problems.","url":"https://www.syracuse.com/health/2023/03/cant-take-statins-new-pill-cuts-cholesterol-heart-attacks.html","urlToImage":"https://www.syracuse.com/resizer/X3Xi9XD-PI-mFmLXGolXXYEPPH4=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/P6ROPD3PGJFSVIHBMS6GKKJFJ4.jpeg","publishedAt":"2023-03-06T11:59:00Z","content":"Drugs known as statins are the first-choice treatment for high cholesterol but millions of people who cant or wont take those pills because of side effects may have another option.\r\nIn a major study,… [+2831 chars]"},{"source":{"id":null,"name":"Big Blue View"},"author":"JamesPHickey","title":"Giants news, 3/6: Daniel Jones, addition to coaching staff, more headlines - Big Blue View","description":"New York Giants news for Monday","url":"https://www.bigblueview.com/2023/3/6/23626084/giants-news-rumors-3-6-daniel-jones-addition-to-coaching-staff-more-headlines","urlToImage":"https://cdn.vox-cdn.com/thumbor/pcihlB1tCq-A1Uaq_4fjl5dyM_s=/0x53:741x441/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24480860/BBVNewsRoundup_Logo.png","publishedAt":"2023-03-06T11:41:07Z","content":"Good morning, New York Giants fans!\r\nDaniel Jones agents leaving Indianapolis without a deal done does not mean that negotiations cant or wont continue until Tuesdays 4 p.m. ET franchise tag deadline… [+6075 chars]"},{"source":{"id":"al-jazeera-english","name":"Al Jazeera English"},"author":"Maziar Motamedi","title":"Iran supreme leader orders punishment for schoolgirl poisoning - Al Jazeera English","description":"Ayatollah Khamenei says no doubt the poisonings are deliberate as a top judge suggests perpetrators may face execution.","url":"https://www.aljazeera.com/news/2023/3/6/iran-supreme-leader-promises-punishment-for-schoolgirl-poisoning","urlToImage":"https://www.aljazeera.com/wp-content/uploads/2021/07/000_Nic141203.jpg?resize=1920%2C1318","publishedAt":"2023-03-06T11:20:55Z","content":"Tehran, Iran Irans supreme leader, Ayatollah Ali Khamenei, has called for the perpetrators of schoolgirl poisonings to be punished as attacks spread across the country.\r\nSpeaking on the sidelines of … [+3335 chars]"},{"source":{"id":null,"name":"INSIDER"},"author":"Ayomikun Adekaiyero","title":"Serena Williams' father Richard defends Will Smith over Oscars slap - Insider","description":"Richard Williams told UK TV show \"Good Morning Britain\" that Smith was justified in slapping Chris Rock for making a joke about Jada Pinkett Smith.","url":"https://www.insider.com/serena-williams-father-richard-defends-will-smith-over-oscars-slap-2023-3","urlToImage":"https://i.insider.com/6405b58f934c2c001802b425?width=1200&format=jpeg","publishedAt":"2023-03-06T11:05:12Z","content":"Venus and Serena Williams' father Richard defended Will Smith over the infamous Oscars slap in a new interview.\r\nSmith faced backlash after slapping Chris Rock on stage during the 2022 Academy Awards… [+1910 chars]"},{"source":{"id":"cnn","name":"CNN"},"author":"Rebekah Riess","title":"A suspect is in custody after 3 people were killed, including a child, in a possible home invasion shooting in Illinois, police said - CNN","description":"A suspect is in custody after a child and two adults were killed and a fourth person was wounded in a possible home invasion shooting in Bolingbrook, Illinois, on Sunday, police said.","url":"https://www.cnn.com/2023/03/06/us/bolingbrook-illinois-home-invasion-shooting/index.html","urlToImage":"https://media.cnn.com/api/v1/images/stellar/prod/230306085102-bolingbrook-home-invasion-map.jpg?c=16x9&q=w_800,c_fill","publishedAt":"2023-03-06T11:03:00Z","content":"A suspect is in custody after a child and two adults were killed and a fourth person was wounded in a possible home invasion shooting in Bolingbrook, Illinois, on Sunday, police said.\r\nOfficers respo… [+1050 chars]"},{"source":{"id":null,"name":"The Guardian"},"author":"Eric Berger","title":"'We are struggling': doctors faced with vacuum of information on long Covid - The Guardian","description":"Three years into the pandemic, unanswered questions about the condition limit physicians’ ability to treat patients","url":"https://www.theguardian.com/world/2023/mar/06/long-covid-unanswered-question-doctors-stigma","urlToImage":"https://i.guim.co.uk/img/media/8a331f595b28d9ed55f16ec12d7b576347132f49/0_106_7489_4491/master/7489.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=aff2594a9e2903ad04b493873265f11c","publishedAt":"2023-03-06T11:01:00Z","content":"More than three years into the Covid pandemic, there are a host of important unanswered questions about long Covid, which significantly limit healthcare providers ability to treat patients with the c… [+6310 chars]"},{"source":{"id":null,"name":"CNBC"},"author":"Holly Ellyatt","title":"Ukraine war live updates: Time could be running out for Ukrainian forces in besieged Bakhmut; Russia turns to 'vintage' tanks - CNBC","description":"It's unclear how much of Bakhmut is controlled by Russian forces, and whether Ukrainain forces are starting to withdraw from parts of the city.","url":"https://www.cnbc.com/2023/03/06/ukraine-war-live-updates-latest-news-on-russia-and-the-war-in-ukraine.html","urlToImage":"https://image.cnbcfm.com/api/v1/image/107191668-1675931465199-gettyimages-1457415190-bakhmut5152817_2db43513-30fb-4186-9f56-c5d043d52c76.jpeg?v=1678097882&w=1920&h=1080","publishedAt":"2023-03-06T10:18:00Z","content":"The status of Bakhmut is unclear after conflicting reports at the weekend over how much of the city was controlled by Russian forces, and whether Ukrainain forces were starting to withdraw from parts… [+1868 chars]"}],
            loading : false,
            page : 1
        }
    }

    async componentDidMount() {
        // console.log('componentDidMount ' + this.props.category)
        // let categoryTypeData = []
        // if (this.props.category === 'general') {
        //     categoryTypeData = this.state.data.slice(0, 4)
        // } else if (this.props.category === 'business') {
        //     categoryTypeData = this.state.data.slice(4, 8)
        // } else if (this.props.category === 'entertainment') {
        //     categoryTypeData = this.state.data.slice(8, 12)
        // } else if (this.props.category === 'health') {
        //     categoryTypeData = this.state.data.slice(12, 16)
        // } else if (this.props.category === 'science') {
        //     categoryTypeData = this.state.data.slice(16, 20)
        // } else if (this.props.category === 'sports') {
        //     categoryTypeData = this.state.data.slice(20, 24)
        // } else if (this.props.category === 'technology') {
        //     categoryTypeData = this.state.data.slice(24, 28)
        // } else {
        //     categoryTypeData = this.state.data.slice(28, 30)
        // }
        // console.log(categoryTypeData)
        let categoryTypeData = this.state.data.slice(0, 4)
        this.setState({
            articles : categoryTypeData,
            totalResults : this.state.data.length
        })        
    }

    fetchData = async () => {
        console.log('fetch data '+this.increment)
        let categoryTypeData = this.state.data.slice(this.increment, this.increment+8)
        this.setState({
            articles : this.state.articles.concat(categoryTypeData)
        })
        this.increment = this.increment+4
        console.log('fetch data '+this.increment +' incremented')
    }

    render() {
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px' }}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchData}
                    hasMore={this.state.totalResults > this.state.articles.length}
                    loader={<h1>Loading...</h1>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    <div className='container'>
                        <div className='row'>
                            {this.state.articles.map((element) =>
                                <div className='col mb-4' key={element.url}>
                                    <NewsItem title={element.title ? element.title : ''} description={element.description ? element.description : 'Click on Read more for description'} imageUrl={element.urlToImage ? element.urlToImage : 'https://media.cnn.com/api/v1/images/stellar/prod/221118103839-02-twitter-future-uncertainty-restricted.jpg?c=16x9&q=w_800,c_fill'} newsUrl={element.url} author={element.author ? element.author : 'Unknown'} publishedAt={new Date(element.publishedAt).toGMTString()} source={element.source.name} />
                                </div>
                            )}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className='container'>
                    <div className="d-flex justify-content-between">
                        <button disabled={this.state.page === 1} type="button" className="btn btn-dark" onClick={this.onPreviousClick}>&larr; Previous</button>
                        <button type="button">{this.state.page}</button>
                        <button disabled={Math.ceil(this.state.totalResults/this.props.pageSize) === this.state.page} type="button" className="btn btn-dark" onClick={this.onNextClick}>Next &rarr;</button>
                    </div>
                </div> */}
            </>
        )
    }
}
