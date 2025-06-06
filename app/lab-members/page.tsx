import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PHDthesissupervision from "@/data/phd_thesis_supervision.json" assert { type: "json" }

const currentStudents = [
  {
    name: "Syauki Aulia Thamrin",
    status: "Postdoctoral Researcher",
    email : "syauki.aulia@outlook.com",
    image :"/S__33996814.jpg"
  },
  {
    name: "王俊皓",
    status: "Master",
    department: "Department of Computer Science",
    email: "dddd3083@gmail.com",
    image: "/S__18546751.jpg",
  },
  {
    name: "陳致齊",
    status: "Master",
    department: "Department of Computer Science",
    email: "linus901105@gmail.com",
    image: "/linus_headshot.jpg",
  },
  {
    name: "毛胤絜",
    status: "Master",
    department: "Department of Computer Science",
    email: "maojack900610@gmail.com",
    image: "/S__108060676.jpg",
  },
  {
    name: "Annabella Putri Dirgo (楊玉蘋）",
    status: "Master",
    department: "Institute of Information Systems and Applications",
    email: "belladirgo@gapp.nthu.edu.tw",
    image: "/02.01-5x5.jpg",
  },
  {
    name: "吳花瑜",
    status: "Master",
    department: "Institute of Information Systems and Applications",
    email: "vivian989370@gmail.com",
    image: "/vivian.jpg",
  },
  {
    name: "陳威宏",
    status: "Master",
    department: "Department of Computer Science",
    email:"vincentb0223@gmail.com",
    image:"/陳威宏.png"
  }
]

const alumniData = [
{ name: "Syauki Aulia Thamrin", year: "2025", paper: "Distinguishing Depression and Bipolar Disorder on Social Media Data Using Deep Learning Technologies", degree: "PhD" },
{ name: "蔡洵晟", year: "2024", paper: "Graph Encoding-Enhanced Transformer for Drug Recommendation", degree: "Master" },
{ name: "李昀叡", year: "2024", paper: "Analyzing Handwriting Characteristics of Children with Autism by Chinese Characters and Mandarin Phonetic Symbols", degree: "Master" },
{ name: "陳柏昇", year: "2024", paper: "Detecting Autism in Children Through Drawing Characteristics Using the Visual-Motor Integration (VMI) Test", degree: "Master" },
{ name: "賴彥宇", year: "2024", paper: "Using speech characteristics from children's story narratives to detect autistic tendencies through deep learning methods", degree: "Master" },
{ name: "廖哲暉", year: "2024", paper: "Preserving Facial Features during Image De-identification for Autism Screening", degree: "Master" },
{ name: "戴良光", year: "2023", paper: "Finding Most Profitable Product(s) Based on Price Settings", degree: "PhD" },
{ name: "嚴翎愷", year: "2023", paper: "Identification of Chinese handwriting characteristics of children with autism", degree: "Master" },
{ name: "孫睿菡", year: "2023", paper: "Using natural language processing to analyze autistic tendencise from children's picture book narratives", degree: "Master" },
{ name: "張志宇", year: "2022", paper: "Biomedical Named Entity Recognition with the Combined Feature Attention and Fully-Shared Multi-Task Learning", degree: "Master" },
{ name: "蔡昀陞", year: "2022", paper: "Suicide Risk Assessment using Word-Level Model with Dictionary-Based Risky Posts Selection", degree: "Master" },
{ name: "林鎰鋒", year: "2022", paper: "Predicting the Following Support Strategy during the Emotional Support Dialogue by Integrating the Dialogue History and Supporter Features", degree: "Master" },
{ name: "林昀昇", year: "2022", paper: "The Detection of Mental Health Conditions by Incorporating Knowledge Retrieval", degree: "Master" },
{ name: "吳東澤", year: "2021", paper: "Classical Chinese Poetry Generation from Vernacular Chinese: A Word-Enhanced Supervised Apporach", degree: "Master" },
{ name: "鄭如君", year: "2021", paper: "Multimodal Time-Aware Attention Networks for Depression Detection", degree: "Master" },
{ name: "盧冠傑", year: "2021", paper: "Depression Detection via Conversation Turn Classification", degree: "Master" },
{ name: "李承聿", year: "2020", paper: "A Multimodal Architecture for ICU Readmission Prediction", degree: "Master" },
{ name: "張庭瑋", year: "2020", paper: "Emotion-Cause Pair Extraction Based on Text Comprehension Model", degree: "Master" },
{ name: "林政穎", year: "2020", paper: "Finding the Most Helpful Answers in Online Health Question Answering Communities", degree: "Master" },
{ name: "周昱呈", year: "2020", paper: "Routing Questions to the Most Relevent Answerers in Community Question Answering Sites", degree: "Master" },
{ name: "陳怡先", year: "2019", paper: "Early Prediction of Acquiring Acute Kidney Injury for Older Inpatients Using Most Effective Laboratory Test Results", degree: "Master" },
{ name: "丘鈞岳", year: "2019", paper: "Multimodal Depression Detection on Instagram Considering Time Interval of Posts", degree: "Master" },
{ name: "楊弘智", year: "2018", paper: "Discovering High Demanding Bus Routes Using Farecard Data", degree: "Master" },
{ name: "吳品樺", year: "2018", paper: "Event Detection for Exploring Emotional Upheaval of Depressive People", degree: "Master" },
{ name: "曹書恒", year: "2018", paper: "A Data Science Approach to Dynamically Optimizing Bus Departure Time", degree: "Master" },
{ name: "黃郁晴", year: "2018", paper: "Predicting Depression Tendency Based on Image, Text and Behavior Data from Instagram", degree: "Master" },
{ name: "巫旻諺", year: "2017", paper: "A Two-stage Depression Detection Method using Social Media, Questionnaire and Open Data", degree: "Master" },
{ name: "陳毓琪", year: "2016", paper: "Mining User Trajectories from Smartphone Data", degree: "Master" },
{ name: "李偉宏", year: "2016", paper: "Mining Accompanying Relationships between Diseases from Patient Records", degree: "Master" },
{ name: "張維元", year: "2016", paper: "A Data-driven Framework on Correlating Air Pollution Indices and Cancer Statistics", degree: "Master" },
{ name: "童冠傑", year: "2015", paper: "Predicting Elections Based on Social Media", degree: "Master" },
{ name: "呂其錞", year: "2013", paper: "Finding Shortest Paths Considering the Requirments of Users", degree: "Master" },
{ name: "戴偉恒", year: "2013", paper: "On Continunous Spatial Skyline Query over a Line Segment", degree: "Master" },
{ name: "鄭瑞賢", year: "2013", paper: "On Spatial Top-k Queries Considering Dominating Relationship", degree: "Master" },
{ name: "林真伊", year: "2012", paper: "Efficient Algorithms for Determining k-most Demanding/Favorite Products", degree: "PhD" },
{ name: "莊坤翰", year: "2012", paper: "On Sequential K-Coverge Verification", degree: "Master" },
{ name: "吳柏輝", year: "2012", paper: "Top-k Query Processing Considering Reverse Skyline Retrieval", degree: "Master" },
{ name: "蔡予欣", year: "2012", paper: "Local Sensor Synchronization in Multi-Path Wireless Sensor Network", degree: "Master" },
{ name: "葉崇安", year: "2011", paper: "Finding Leaders with Maximum Spread of Influence through Social Networks", degree: "Master" },
{ name: "林王智瑞", year: "2011", paper: "Mutiple Release Anonymization for Time-Series Social Network Data", degree: "Master" },
{ name: "黃國柱", year: "2011", paper: "Coverage Maximization on Spatial Databases Considering Bi-chromatic Reverse k-Nearest Neighbors", degree: "Master" },
{ name: "王恩慈", year: "2010", paper: "Mining Frequent Itemsets over Distributed Data Streams", degree: "PhD" },
{ name: "范耀中", year: "2010", paper: "Efficient and Robust Schemes for Accuracy-Guranteed Sensor Data Aggregation", degree: "PhD" },
{ name: "蘇惠珠", year: "2010", paper: "Continuous Probabilistic Skyline Queries over Uncertain Data Streams", degree: "Master" },
{ name: "王文琦", year: "2010", paper: "Dynamic Skyline Computations over Considering Range Queries", degree: "Master" },
{ name: "李嘉倫", year: "2010", paper: "Top-N Query Processing on Spatial Databases Considering Bi-chromatic Reverse K-Nearest Neighbors", degree: "Master" },
{ name: "李大雋", year: "2010", paper: "On Continuous Top-k Similarity Joins", degree: "Master" },
{ name: "林俊學", year: "2009", paper: "Hierarchical Clustering on Streaming Data Using Micro Cluster", degree: "Master" },
{ name: "左聰文", year: "2008", paper: "Mining and Retrieving Various Sequential Patterns in Sequence Databases", degree: "PhD" },
{ name: "邱鼎潁", year: "2008", paper: "On Frequent Sequence Mining and Online Classification Techniques", degree: "PhD" },
{ name: "陳宏鎮", year: "2008", paper: "Techniques of Music Analysis Recommendation and Retrieval for Music Services", degree: "PhD" },
{ name: "黃敏維", year: "2008", paper: "Efficient Computation of Sub-space Top-K probabilistic Skylines on Uncertain Data", degree: "Master" },
{ name: "蔡景翔", year: "2008", paper: "Fast Paths Recommendation in Road Networks based on Efficient Skyline Computations", degree: "Master" },
{ name: "趙皎宏", year: "2008", paper: "Sharing Aggregate Computations for Processing Multiple Regional Queries in Sensor Networks", degree: "Master" },
{ name: "凌鈺城", year: "2007", paper: "Reverse Nearest Neighbor Search in Metric Spaces with Adjustable Distance Functions", degree: "Master" },
{ name: "廖立文", year: "2007", paper: "Rock Music Classification by Chord and Rhythm", degree: "Master" },
{ name: "林冠榮", year: "2007", paper: "Adaptive Power-Saving Techniques for WSN based on Incremental Data Trend Analysis", degree: "Master" },
{ name: "陳慶昇", year: "2007", paper: "Lifetime-Constrained Dynamic Sensing Strategies in Sensor Networks", degree: "Master" },
{ name: "沈進雄", year: "2006", paper: "An Efficient Method for Processing Multiple Continuous Top-K Queries", degree: "Master" },
{ name: "Juliana Hsieh", year: "2006", paper: "An Optimization Strategy for Efficient Query Execution over Streaming Source", degree: "Master" },
{ name: "盧彥光", year: "2006", paper: "Mining Frequent Subtrees over Data Stream Using Closed Subtrees", degree: "Master" },
{ name: "陳鴻元", year: "2006", paper: "Improving Histogram Approximation with Line Representation", degree: "Master" },
{ name: "李東穎", year: "2006", paper: "Mining Serial Episode Rules with Successor Lag Times over Multiple Data Streams", degree: "Master" },
{ name: "李佳蓁", year: "2006", paper: "Continuous Evaluation of Fastest Path Queries on Road Networks", degree: "Master" },
{ name: "蘇郁琪", year: "2006", paper: "Monitoring Heterogeneous Nearest Neighbors for Moving Objects by Considering Location-independent Attributes", degree: "Master" },
{ name: "鍾玄彥", year: "2006", paper: "Efficiently Answering Time-Space Range Queries over Moving Objects by a Probabilistic Approach", degree: "Master" },
{ name: "林佳漢", year: "2005", paper: "A Study on Video Modeling, Indexing and Query Processing", degree: "PhD" },
{ name: "劉寧漢", year: "2005", paper: "Similarity Search in Polyphonic Music Databases", degree: "PhD" },
{ name: "謝承恩", year: "2005", paper: "Discovering Frequent Tree Patterns over Data Streams", degree: "Master" },
{ name: "吳自強", year: "2005", paper: "Maintaining Moving Sums over Data Streams", degree: "Master" },
{ name: "陳穎毅", year: "2005", paper: "An Index Structure for XML Documents using Set-Valued Attributes of Elements", degree: "Master" },
{ name: "張力元", year: "2005", paper: "Efficient Approaches for Adaptive Load Shedding in a Data Stream Management System", degree: "Master" },
{ name: "葉志剛", year: "2005", paper: "Processing Multiple Queries of Finding Frequent Itemsets over Multiple Data Streams", degree: "Master" },
{ name: "林志祥", year: "2004", paper: "Mining Frequent Itemsets in Time-Sensitive Sliding Window over Data Streams", degree: "Master" },
{ name: "翁珮玹", year: "2004", paper: "An Automatic Musical from Analysis System for Rondo and Fugue", degree: "Master" },
{ name: "蔡峰杰", year: "2004", paper: "Building a Virtual Music Channel with Preferred Music Mood from Multiple Music Streams", degree: "Master" },
{ name: "黃人傑", year: "2004", paper: "Efficient Query Processing in Transactional Databases by A Two-Level Bounding Mechanism", degree: "Master" },
{ name: "蔡曉雯", year: "2004", paper: "An HMM-based Variation System for Producing Blues Style Music", degree: "Master" },
{ name: "簡敏紘", year: "2003", paper: "Perceptual Analysis for Music Segmentation", degree: "Master" },
{ name: "李嘉雄", year: "2003", paper: "A Novel Representation of Sequences based on Structural Information for Effective Sequence Retrieval", degree: "Master" },
{ name: "曾泳舜", year: "2003", paper: "Collaborative Music Recommendation by Profiles of Trustable Users", degree: "Master" },
{ name: "江家明", year: "2003", paper: "A New Approach for Sensitive Rule Hiding by Considering Side Effects", degree: "Master" },
{ name: "謝文雯", year: "2002", paper: "Video Content Analysis for Constructing a Bowling Information System", degree: "Master" },
{ name: "林長榮", year: "2002", paper: "Classification of Music Data using Repeating Patterns", degree: "Master" },
{ name: "沈詩馨", year: "2002", paper: "An XML-based Semantic Model for Music Querying Systems", degree: "Master" },
{ name: "陳珮宜", year: "2002", paper: "Vedio Retrieval Based on Similarity of Motion Tracks of Moving Objects", degree: "Master" },
{ name: "吳宜鴻(Yi-Hung Wu)", year: "2001", paper: "The Analysis Indexing and Retrieval of Web Data", degree: "PhD" },
{ name: "徐嘉連(Jia-Lien Hsu)", year: "2001", paper: "Content-based Music Information Retrieval and Analysis", degree: "PhD" },
{ name: "李官陵(Guanling Lee)", year: "2001", paper: "Location Management and Efficient Query Processing in Mobile Information Systems", degree: "PhD" },
{ name: "許志浩", year: "2001", paper: "Generating Broadcast Programs on Multiple Channels int the Wireless Environment", degree: "Master" },
{ name: "潘依寧", year: "2001", paper: "Scheduling Real-Time Data Items In Multiple Channels And Multiple Receivers Environments", degree: "Master" },
{ name: "李玄杰", year: "2001", paper: "A Semantic Video Retrieval System Supporting Knowledge Reasoning", degree: "Master" },
{ name: "陳宏鎮", year: "2001", paper: "A music recommendation system based on music data grouping and user interests", degree: "Master" },
{ name: "張聿傑", year: "2001", paper: "Discovering Phenomena with User Queries", degree: "Master" },
{ name: "羅壽之", year: "2000", paper: "Data Broadcasting in the Mobile Computing Environment", degree: "PhD" },
{ name: "陳勇全", year: "2000", paper: "Making Personalized Recommendation on the Internet Environment through User Interests and User Behaviors", degree: "Master" },
{ name: "吳育瑋", year: "2000", paper: "Effective Search of WWW Data by Relevance Feedback and Query Expansion Using History Information", degree: "Master" },
{ name: "吳雅婷", year: "2000", paper: "Content-based Image Retrieval by Feature Point Matching", degree: "Master" },
{ name: "葉孟勳", year: "2000", paper: "A Push-Pull Strategy for Efficient Answering of Multiple Data Item Queries in Mobile Environments", degree: "Master" },
{ name: "劉家燕", year: "2000", paper: "A Study on Inter-transaction Association Rule Mining and the Classification of the Data Mining Problems", degree: "Master" },
{ name: "李威進", year: "1999", paper: "Efficient Index Structures for Music Data Retrieval", degree: "Master" },
{ name: "花毓瑄", year: "1999", paper: "Query by Segments: An Approach for Song Retrieval in Music Databases", degree: "Master" },
{ name: "劉志俊(Chih-Chin Liu)", year: "1998", paper: "Content-Based Video and Music Data Retrieval", degree: "PhD" },
{ name: "郭秋田(Tony C.T. Kuo)", year: "1998", paper: "Indexing Retrieval and Query Processing for Video Databases", degree: "PhD" },
{ name: "李志忠(Chih-Chong Lee)", year: "1998", paper: "An Efficient Approach for Incremental Association Rule Mining", degree: "Master" },
{ name: "陳珍佩(J. P. Chen)", year: "1998", paper: "Index Structures for Information Filtering on WWW", degree: "Master" },
{ name: "陳俊吉(J. G. Chen)", year: "1998", paper: "行動資訊系統之查詢介面設計與查詢處理", degree: "Master" },
{ name: "李金松(J. S. Lee)", year: "1998", paper: "Semantic Video Model for Content-based Retrieval", degree: "Master" },
{ name: "張仲銘(Paul C. M. Chang)", year: "1998", paper: "Mining Association Rules by Sorts", degree: "Master" },
{ name: "顏秀珍(Show-Jane Yen)", year: "1997", paper: "Efficient Knowledge Discovery from Large Databases", degree: "PhD" },
{ name: "柯佳伶(Jia-Ling Koh)", year: "1997", paper: "Integration and Query Processing for Object and Multimedia Databases", degree: "PhD" },
{ name: "陳政全(James C. C. Chen)", year: "1997", paper: "Query by Rhythms An Approach for Song Retrieval in Music Databases", degree: "Master" },
{ name: "李科莉(K. L. Lee)", year: "1997", paper: "Efficient Graph-Based Algorithms for Discovering and Maintaining Knowledge in Large Databases", degree: "Master" },
{ name: "魏廷諭(Ting-Yu Wai)", year: "1997", paper: "Retrieving Video Data via Motion Tracks of Content Symbols", degree: "Master" },
{ name: "蔡秀滿(Pauray S. M. Tsai)", year: "1996", paper: "Interoperability and query Optimization in multidatabase systems", degree: "PhD" },
{ name: "張志祥(C. S. Chang)", year: "1996", paper: "The inference,aggregation,refinement and applications of uncertain data", degree: "PhD" },
{ name: "林義斌(I. P. Lin)", year: "1996", paper: "An efficient method to build video indexes from compressed data", degree: "Master" },
{ name: "陳彥寰(Y. H. Chen)", year: "1996", paper: "整合性資料查詢及導覽服務系統之設計與實作", degree: "Master" },
{ name: "邱瑞山(Jui-Shang Chiu)", year: "1995", paper: "Pv-table - A representation system for exclusive disjunctive data", degree: "PhD" },
{ name: "周大鈞(Ta-Chun Chou)", year: "1995", paper: "Music Database:indexing technique and implementation", degree: "Master" },
{ name: "林柔慧(Jou-Hui Lin)", year: "1995", paper: "An efficient query processing algorithm on object databases with multi-valued attributes", degree: "Master" },
{ name: "王文方(Wen-Fang Wang)", year: "1993", paper: "A new relation partitioning scheme for distributed query optimization", degree: "Master" },
{ name: "吳念祖(Alex N.J. Wu)", year: "1993", paper: "Improving execution concurrency for long-duration database transactions", degree: "Master" },
{ name: "曾守正(Frank S.C. Tseng)", year: "1992", paper: "A study on partial values with applications to query processing in heterogeneous database systems", degree: "PhD" },
{ name: "李金地(C. T. Li)", year: "1992", paper: "Performance Evaluation for Managing Inconsistent Caches in Client/Server Architecture", degree: "Master" },
{ name: "簡國芳 (K. F. Chien)", year: "1992", paper: "Providing Object Views on Relational Database", degree: "Master" },
{ name: "邱俊豪(J. H. Chiou)", year: "1992", paper: "A new data structure and accelerators for efficient temporal query processing", degree: "Master" },

]

export default function LabMembersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-blue-500 bg-clip-text text-transparent">
            Lab Members
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Meet our talented students</p>
        </div>

        {/* Current Students Section */}
        <Card className="mb-16 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-lg">
            <CardTitle className="text-3xl font-bold">Current Members</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentStudents.map((student, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border-0 bg-white">
                  <CardContent className="p-6 text-center">
                    <Image
                      src={student.image || "/placeholder.svg"}
                      alt={student.name}
                      width={200}
                      height={200}
                      className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
                    />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{student.name}</h3>
                    <div className="space-y-2">
                      <Badge
                        className={`${
                          student.status === "Postdoctoral Researcher"
                            ? "bg-orange-100 text-orange-800 hover:bg-orange-200"
                            : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                        }`}
                      >
                        {student.status}
                      </Badge>
                      <p className="text-gray-600">{student.department}</p>
                      <p className="text-sm text-gray-500">{student.email}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* PHD Thesis Supervision */}
        
        <Card className="mb-16 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-t-lg">
            <CardTitle className="text-3xl font-bold">PhD Thesis Supervision</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {PHDthesissupervision.map((item) => (
                <li key={item.id}>
                  <strong>{item.name}</strong>, &ldquo;{item.title}&rdquo;, {item.date}, <em>{item.institution}</em>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        {/* Previous Students Section */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-t-lg">
            <CardTitle className="text-3xl font-bold">Alumni</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {alumniData.map((student, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:from-orange-50 hover:to-red-50 transition-colors"
                >
                  <div>
                    <h4 className="font-semibold text-gray-800">{student.name}</h4>
                    <p className="text-gray-600 p-3">{student.paper}</p>
                    <Badge
                      variant="outline"
                      className={`mt-1 ${
                        student.degree === "PhD" ? "border-orange-300 text-orange-700" : "border-blue-300 text-blue-700"
                      }`}
                    >
                      {student.degree}
                    </Badge>
                  </div>
                  <span className="text-gray-500 font-medium">{student.year}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
