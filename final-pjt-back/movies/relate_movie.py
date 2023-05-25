import json
import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# 출처 https://wikidocs.net/24603


def create_cosine():
    data = pd.read_json("./movies/src/raw_movies.json")

    data["overview"] = data["overview"].fillna("")

    tfidf = TfidfVectorizer()
    tfidf_matrix = tfidf.fit_transform(data["overview"])

    cosine_sim = cosine_similarity(tfidf_matrix, tfidf_matrix)

    np.save("./movies/src/cosine_sim.npy", cosine_sim)


def get_relate_movies(title):
    try:
        cosine_sim = np.load("./movies/src/cosine_sim.npy")
    except:
        create_cosine()
        cosine_sim = np.load("./movies/src/cosine_sim.npy")

    path = "./movies/src/titles.json"

    title_to_index = json.load(open(path, "r", encoding="utf-8"))
    # 선택한 영화의 타이틀로부터 해당 영화의 인덱스를 받아온다.
    idx = title_to_index[title]

    # 해당 영화와 모든 영화와의 유사도를 가져온다.
    sim_scores = list(enumerate(cosine_sim[idx]))

    # 유사도에 따라 영화들을 정렬한다.
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    # 가장 유사한 15개의 영화를 받아온다.
    sim_scores = sim_scores[1:16]

    # 가장 유사한 15개의 영화의 인덱스를 얻는다.
    movie_indices = [idx[0] for idx in sim_scores]

    # 가장 유사한 15개의 영화의 제목을 리턴한다.
    result = list(map(lambda x: title_to_index[str(x)], movie_indices))
    return result
