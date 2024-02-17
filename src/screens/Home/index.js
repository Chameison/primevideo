import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";
import MovieTheWhell from "../../assets/movies/the_wheel_of_time.png";
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { Movies } from "../../components/movies";
import { MOVIESCRIME } from "../../utils/moviesCrimes";
import { MOVIESWATCH } from "../../utils/moviesWatch";

export const Home =
  () => {
    return (
      <View
        style={
          styles.container
        }
      >
        <View
          style={
            styles.header
          }
        >
          <Image
            style={
              styles.primeLogoImg
            }
            source={
              PrimeVideoLogo
            }
          />
          <Image
            style={
              styles.amazonLogoImg
            }
            source={
              AmazonLogo
            }
          />
        </View>

        <View
          style={
            styles.teste
          }
        >
          <TouchableOpacity>
            <Text
              style={
                styles.categoryText
              }
            >
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={
                styles.categoryText
              }
            >
              Tv
              Shows
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={
                styles.categoryText
              }
            >
              Movies
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={
                styles.categoryText
              }
            >
              Kids
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>
          <TouchableOpacity
            style={
              styles.movieImageBg
            }
          >
            <Image
              style={
                styles.movieImage
              }
              source={
                MovieTheWhell
              }
            />
          </TouchableOpacity>

          <Text
            style={
              styles.titleMovie
            }
          >
            Continuar
            Assistindo
          </Text>
          <FlatList
            data={
              MOVIESWATCHING
            }
            keyExtractor={(
              item
            ) =>
              item.id
            }
            renderItem={({
              item,
            }) => (
              <Movies
                movieURL={
                  item.moviesURL
                }
              />
            )}
            horizontal
            contentContainerStyle={
              styles.contentList
            }
            showsHorizontalScrollIndicator={
              false
            }
          />

          <Text
            style={
              styles.titleMovie
            }
          >
            Filmes de Crimes
          </Text>
          <FlatList
            data={
              MOVIESCRIME
            }
            keyExtractor={(
              item
            ) =>
              item.id
            }
            renderItem={({
              item,
            }) => (
              <Movies
                movieURL={
                  item.moviesURL
                }
              />
            )}
            horizontal
            contentContainerStyle={
              styles.contentList
            }
            showsHorizontalScrollIndicator={
              false
            }
          />

          <Text
            style={
              styles.titleMovie
            }
          >
            Filmes em outra Linguagem
          </Text>
          <FlatList
            data={
              MOVIESWATCH
            }
            keyExtractor={(
              item
            ) =>
              item.id
            }
            renderItem={({
              item,
            }) => (
              <Movies
                movieURL={
                  item.moviesURL
                }
              />
            )}
            horizontal
            contentContainerStyle={
              styles.contentList
            }
            showsHorizontalScrollIndicator={
              false
            }
          />
        </ScrollView>
      </View>
    );
  };

const styles =
  StyleSheet.create(
    {
      container:
        {
          flex: 1,
          backgroundColor:
            "#232f3e",
          alignItems:
            "flex-start",
        },
      header:
        {
          width:
            "100%",
          paddingTop: 80,
          alignItems:
            "center",
          justifyContent:
            "center",
        },
      amazonLogoImg:
        {
          marginTop:
            -32,
          marginLeft: 30,
        },
      teste:
        {
          width:
            "100%",
          flexDirection:
            "row",
          justifyContent:
            "space-evenly",
          marginTop: 30,
          marginBottom: 15,
        },
      categoryText:
        {
          fontSize: 14,
          fontWeight:
            "700",
          color:
            "#fff",
        },
      movieImageBg:
        {
          width:
            "100%",
          alignItems:
            "center",
        },
      movieImage:
        {
          width:
            "100%",
        },
      titleMovie:
        {
          color:
            "#fff",
          fontSize: 18,
          fontWeight:
            "700",
          padding: 15,
        },
      contentList:
        {
          paddingLeft: 18,
          paddingRight: 30,
        },
    }
  );
