<template>
    <div class="container-lg p-0">
        <div class="profile">
            <div class="header bg-warning">
                <!-- 배경색 선택 가능하도록... -->
            </div>
            <div class="content">
                <div class="img-container">
                    <img src="@/assets/poster/poster1.jpg" alt="" class="img-thumbnail rounded-circle float-start" style="width: 120px; height: 120px;">
                    <div id="follow" class="d-flex align-items-center">
                        <p class="me-2 mb-0">팔로워: {{ followerCount }}</p>
                        <p class="me-2 mb-0">팔로잉: {{ followingCount }}</p>
                        <p>팔로우 기능 만들기...</p>
                        <button v-if="!isCurrentUser" @click="toggleFollow" class="ms-auto btn btn-primary">
                            {{ isFollowing ? '언팔로우' : '팔로우' }}
                        </button>
                        <button v-else>
                            프로필 수정
                            드롭박스 <a href="https://getbootstrap.kr/docs/5.2/components/dropdowns/">https://getbootstrap.kr/docs/5.2/components/dropdowns/</a>
                            리뷰 토글? <a href="https://getbootstrap.kr/docs/5.2/components/collapse/">https://getbootstrap.kr/docs/5.2/components/collapse/</a>
                        </button>
                    </div>
                </div>
                <h3 style="text-align: center;">{{ name }}</h3>
                <p style="text-align: center;">{{ bio }}</p>
            </div>
        </div>

        <div class="wrap">
            <div id="likemovies" class="m-3">
                <hr>
                <h3 class="text-start">좋아하는 영화</h3>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row row-cols-3 row-cols-md-5 g-3">
                                <div class="col">
                                    <div class="card">
                                        <img src="@/assets/poster/poster1.jpg" class="card-img-top" alt="...">
                                        <div class="card-body">영화제목</div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <img src="@/assets/poster/poster2.jpg" class="card-img-top" alt="...">
                                        <div class="card-body">영화제목</div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <img src="@/assets/poster/poster3.jpg" class="card-img-top" alt="...">
                                        <div class="card-body">영화제목</div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <img src="@/assets/poster/poster4.jpg" class="card-img-top" alt="...">
                                        <div class="card-body">영화제목</div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <img src="@/assets/poster/poster5.jpg" class="card-img-top" alt="...">
                                        <div class="card-body">영화제목</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row row-cols-3 row-cols-md-5 g-3">
                                <div class="col">
                                    <div class="card">
                                        <img src="@/assets/poster/poster1.jpg" class="card-img-top" alt="...">
                                        <div class="card-body">영화제목</div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <img src="@/assets/poster/poster2.jpg" class="card-img-top" alt="...">
                                        <div class="card-body">영화제목</div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <img src="@/assets/poster/poster3.jpg" class="card-img-top" alt="...">
                                        <div class="card-body">영화제목</div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <img src="@/assets/poster/poster4.jpg" class="card-img-top" alt="...">
                                        <div class="card-body">영화제목</div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <img src="@/assets/poster/poster5.jpg" class="card-img-top" alt="...">
                                        <div class="card-body">영화제목</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div id="myreviews">
                <h3>나의 리뷰</h3>
                <p>내가 리뷰한 영화들 목록 -> 좋아하는 영화처럼... </p>
            </div>
            <div id="mycommu">
                <h3>나의 커뮤니티</h3>
                <p>게시글... (커뮤니티 더보기에서 내 게시글과 댓글 확인)</p>
            </div>
        </div>
    </div>
</template>
  
<script>
  import axios from 'axios';
  
  
  export default {
    props: ['username'],
    data() {
      return {
        headerImage: '', // 헤더 이미지 경로를 설정하세요
        name: '팝콘무비', // 프로필 이름을 설정하세요
        bio: '영화보고싶다.', // 프로필 소개를 설정하세요
  
        user: null,
        followerCount: 0,
        followingCount: 0,
        isFollowing: false
      }
    },
    created() {
      // 유저 정보와 팔로워/팔로잉 수 가져오기
      this.getUserProfile()
    },
    methods: {
      getUserProfile() {
        axios.get(`/api/users/${this.username}/profile/`)
          .then(response => {
            const data = response.data
            this.user = data.user
            this.followerCount = data.follower_count
            this.followingCount = data.following_count
            this.isFollowing = data.is_following
          })
          .catch(err => {
            console.log(err)
          })
      },
    //   toggleFollow() {
    //     if (this.isFollowing) {
    //       this.unfollowUser()
    //     } else {
    //       this.followUser()
    //     }
    //   },
    //   followUser() {
    //     axios.post(`/api/users/${this.user.id}/follow/`)
    //       .then(() => {
    //         // 팔로우 성공 시 팔로우 상태 변경 및 팔로워 수 업데이트
    //         this.isFollowing = true
    //         this.followerCount++
    //       })
    //       .catch(err => {
    //         console.log(err)
    //       })
    //   },
    //   unfollowUser() {
    //     axios.post(`/api/users/${this.user.id}/unfollow/`)
    //       .then(() => {
    //         // 언팔로우 성공 시 팔로우 상태 변경 및 팔로워 수 업데이트
    //         this.isFollowing = false
    //         this.followerCount--
    //       })
    //       .catch(err => {
    //         console.log(err)
    //       })
    //   },
    },
  }
</script>
  
<style scoped>
.profile {
  width: 100%;
}
.header {
  height: 120px;
}
.content {
  text-align: center;
  padding: 20px;
}
.header-images {
  margin-top: 20px;
}

.img-container {
  position: relative;
}
.img-container > .img-thumbnail {
  border-color: transparent;
  position: relative;
  top: -75px;
}

.carousel-control-prev {
    left: -20px;
}
.carousel-control-next {
    right: -20px;
}
</style>