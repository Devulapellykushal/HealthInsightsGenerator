# import pandas as pd
# import matplotlib.pyplot as plt

# plt.style.use('ggplot')

# def load_health_logs(filepath):
#     df = pd.read_csv(filepath, parse_dates=['date'])
#     df.sort_values('date', inplace=True)
    
#     mood_map = {'sad': 0, 'neutral': 1, 'happy': 2}   #we need to encode numericallly for the graphs
#     df['mood_score'] = df['mood'].map(mood_map)
    
#     return df

# def plot_health_trends(df):

#     mood_map = {'sad': 0, 'neutral': 1, 'happy': 2}
#     df['mood_score'] = df['mood'].map(mood_map)
#     dates = df['date']

#     plt.figure(figsize=(12, 8))

#     plt.subplot(2, 2, 1)
#     plt.plot(dates, df['sleep_hours'], marker='o')
#     plt.title('Sleep Duration (hrs)')
#     plt.xlabel('Date')
#     plt.ylabel('Hours')

#     plt.subplot(2, 2, 2)
#     plt.plot(dates, df['mood_score'], marker='o', color='orange')
#     plt.title('Mood Score (0=Sad, 1=Neutral, 2=Happy)')
#     plt.xlabel('Date')
#     plt.ylabel('Mood Score')

#     plt.subplot(2, 2, 3)
#     plt.plot(dates, df['hydration_ml'], marker='o', color='blue')
#     plt.title('Hydration (ml)')
#     plt.xlabel('Date')
#     plt.ylabel('ml')

#     plt.subplot(2, 2, 4)
#     plt.plot(dates, df['steps'], marker='o', color='green')
#     plt.title('Steps Count')
#     plt.xlabel('Date')
#     plt.ylabel('Steps')

#     plt.tight_layout()
#     plt.show()


# # if __name__ == "__main__":
# #     df = load_health_logs("data/mock_health_logs.csv")
# #     plot_health_trends(df)
import pandas as pd
import matplotlib.pyplot as plt

plt.style.use('ggplot')

# Load and preprocess CSV
def load_health_logs(filepath):
    df = pd.read_csv(filepath, parse_dates=['date'])
    df.sort_values('date', inplace=True)

    # Encode mood as score
    mood_map = {'sad': 0, 'neutral': 1, 'happy': 2}
    df['mood_score'] = df['mood'].map(mood_map)

    return df

# Plot health metrics + mood score
def plot_health_trends(df):
    mood_map = {'sad': 0, 'neutral': 1, 'happy': 2}
    df['mood_score'] = df['mood'].map(mood_map)
    dates = df['date']

    fig, axs = plt.subplots(2, 2, figsize=(12, 8))
    fig.suptitle("📊 Health & Mood Trends", fontsize=16, fontweight='bold')

    # Sleep subplot
    axs[0, 0].plot(dates, df['sleep_hours'], marker='o', color='indigo')
    axs[0, 0].set_title('Sleep Duration (hrs)')
    axs[0, 0].set_xlabel('Date')
    axs[0, 0].set_ylabel('Hours')
    axs[0, 0].tick_params(axis='x', rotation=45)

    # Mood subplot
    axs[0, 1].plot(dates, df['mood_score'], marker='o', color='orange')
    axs[0, 1].set_title('Mood Score (0=Sad, 1=Neutral, 2=Happy)')
    axs[0, 1].set_xlabel('Date')
    axs[0, 1].set_ylabel('Mood')
    axs[0, 1].tick_params(axis='x', rotation=45)

    # Annotate mood labels
    for i, row in df.iterrows():
        axs[0, 1].text(row['date'], row['mood_score'] + 0.1, row['mood'], fontsize=9, color='darkorange', ha='center')

    # Hydration subplot
    axs[1, 0].plot(dates, df['hydration_ml'], marker='o', color='blue')
    axs[1, 0].set_title('Hydration (ml)')
    axs[1, 0].set_xlabel('Date')
    axs[1, 0].set_ylabel('Milliliters')
    axs[1, 0].tick_params(axis='x', rotation=45)

    # Steps subplot
    axs[1, 1].plot(dates, df['steps'], marker='o', color='green')
    axs[1, 1].set_title('Steps Count')
    axs[1, 1].set_xlabel('Date')
    axs[1, 1].set_ylabel('Steps')
    axs[1, 1].tick_params(axis='x', rotation=45)

    # Layout adjustments
    plt.tight_layout(rect=[0, 0, 1, 0.95])  # Leave space for title
    plt.show()

    return fig  # Optional: useful for Flask/Streamlit export
